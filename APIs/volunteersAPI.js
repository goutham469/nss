const exp = require("express")
const DBAccess = require("../Middlewares/DBAccess")
const volunteersAPI = exp.Router()

volunteersAPI.get('/',(req,res)=>{
    res.send("<h1>NSS-VNRVJIET, Volunteers API !</h1>")
})

volunteersAPI.post('/signup-check-roolno',async(req,res)=>{
    let roolsList = await req.roolsList.find({"roolNo":req.body.roolNo}).toArray()
    if(roolsList && roolsList.length == 0)
    {
        res.send({"message":"not exists"})
    }
    else
    {
        res.send({"message":"user exists"})
    }
})

volunteersAPI.post('/add-volunteer-rool-no',DBAccess,async(req,res)=>{
    let preResponse = await req.roolsList.find({"roolNo":req.body.roolNo}).toArray()
    if(preResponse.length == 0)
    {
        let response = await req.roolsList.insertOne({"roolNo":req.body.roolNo,"domain":req.body.domain})
        res.send({"message":"roolNoInserted"})
    }
    else
    {
        res.send({"message":"roolNoAlreadyExists"})
    }
})

volunteersAPI.post('/create-volunteer-account',DBAccess,async(req,res)=>{
    console.log(req.body)
    let response1 = await req.volunteers.find({"roolNo":req.body.roolNo}).toArray()
    if(response1.length == 0)
    {
        let roolsList = await req.roolsList.find({"roolNo":req.body.roolNo}).toArray()
        roolsList = roolsList[0];
        let data = req.body
        data.domain = roolsList.domain
        await req.volunteers.insertOne(data)
        res.send({"message":"new user created"})
    }
    else
    {
        res.send({"message":"user already exists"})
    }
})

volunteersAPI.post('/volunteer-login',DBAccess,async(req,res)=>{
    if(req.body.loginType == 'OAuth')
    {
        let response = await req.volunteers.find({alternateEmail:req.body.email}).toArray();
        if(response.length == 0)
        {
            const roolNo = req.body.email.substring(0,10)
            let response = await req.volunteers.find({roolNo:roolNo}).toArray();
            if(response.length == 0)
            {
                res.send({"message":"email not registered"})
            }
            else
            {
                res.send({"message":"success"})
            }
        }
        else
        {
            res.send({"message":"success"})
        }
    }
    else
    {
        let response = await req.volunteers.find({roolNo:req.body.roolNo}).toArray();
        if(response.length == 0)
        {
            res.send({"message":"rool no not found"})
        }
        else
        {
            response = response[0]
            if(response.password == req.body.password)
            {
                res.send({"message":"success"})
            }
            else
            {
                res.send({"message":"invalid password"})
            }
        }
    }
})

volunteersAPI.post('/update-volunteer-details', DBAccess, async (req, res) => {
    console.log(req.body);
    let query = {};
    let response = await req.volunteers.find({ roolNo: req.body.roolNo }).toArray();

    if (response.length == 0) {
        return res.send({ "message": "user not found" });
    }
 
    response = response[0];
    let data = req.body.data;

    // Check for changes and build the query object
    if (data.password && data.password !== response.password) {
        query.password = data.password;
    }
    if (data.alternateEmail && data.alternateEmail !== response.alternateEmail) {
        query.alternateEmail = data.alternateEmail;
    }
    if (data.profilePicture && data.profilePicture !== response.profilePicture) {
        query.profilePicture = data.profilePicture;
    }
    if (data.branch && data.branch !== response.branch) {
        query.branch = data.branch;
    }
    if (data.section && data.section !== response.section) {
        query.section = data.section;
    }
    if (data.year && data.year !== response.year) {
        query.year = data.year;
    }
    if (data.dateOfBirth && data.dateOfBirth !== response.dateOfBirth) {
        query.dateOfBirth = data.dateOfBirth;
    }

    // Check for changes in socialProfiles
    if (data.socialProfiles) {
        let socialUpdates = {};
        if (data.socialProfiles.instagram !== response.socialProfiles.instagram) {
            socialUpdates.instagram = data.socialProfiles.instagram;
        }
        if (data.socialProfiles.facebook !== response.socialProfiles.facebook) {
            socialUpdates.facebook = data.socialProfiles.facebook;
        }
        if (data.socialProfiles.whatsApp !== response.socialProfiles.whatsApp) {
            socialUpdates.whatsApp = data.socialProfiles.whatsApp;
        }
        if (data.socialProfiles.twitter !== response.socialProfiles.twitter) {
            socialUpdates.twitter = data.socialProfiles.twitter;
        }
        if (data.socialProfiles.linkedIn !== response.socialProfiles.linkedIn) {
            socialUpdates.linkedIn = data.socialProfiles.linkedIn;
        }
        if (data.socialProfiles.website !== response.socialProfiles.website) {
            socialUpdates.website = data.socialProfiles.website;
        }
        if (Object.keys(socialUpdates).length > 0) {
            query.socialProfiles = { ...response.socialProfiles, ...socialUpdates };
        }
    }

    if (Object.keys(query).length === 0) {
        return res.send({ "message": "no updates found" });
    }

    await req.volunteers.updateOne({ roolNo: req.body.roolNo }, { $set: query });
    res.send({ "message": "updated" });
});

volunteersAPI.get('/get-volunteer-details',DBAccess,async(req,res)=>{
    let data = await req.volunteers.find({roolNo:req.query.rollNo}).toArray()
    if(data&&data.length > 0)
    {
        res.send(data[0])
    }
    else{
        res.send({"status":false})
    }
})

volunteersAPI.get('/all',(req,res)=>{
    res.send("hi")
})

module.exports = volunteersAPI
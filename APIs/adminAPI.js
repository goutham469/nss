const exp = require('express')
const DBAccess = require('../Middlewares/DBAccess')
const adminAPI = exp.Router()

adminAPI.get('/',(req,res)=>{
    res.send("<h1>NSS-VNR VJIET , admin API !</h1>")
})

adminAPI.get('/all-volunteers',DBAccess,async(req,res)=>{
    let response = await req.volunteers.find().toArray();
    res.send(response)
})

adminAPI.get('/all-roolsList',DBAccess,async(req,res)=>{
    let response = await req.roolsList.find().toArray();
    res.send(response)
})

adminAPI.post('/add-rollNo',DBAccess,async(req,res)=>{
    let preresponse = await req.roolsList.find({rollNo:req.body.rollNo}).toArray();
    if(preresponse.length == 0)
    {
        let response = await req.roolsList.insertOne(req.body)
        res.send({"messsage":"inserted"})
    }
    else
    {
        res.send({"message":"roolNo already exists"})
    }
})

adminAPI.post('/delete-rollNo',DBAccess,async(req,res)=>{
    let response = await req.roolsList.deleteOne({rollNo:req.body.rollNo})
    res.send(response)
})

adminAPI.post('/delete-volunteer-account',DBAccess,async(req,res)=>{
    let response = await req.volunteers.deleteOne({rollNo:req.body.rollNo})
    res.send(response)
})

adminAPI.get('/get-main-attendence',DBAccess,async(req,res)=>{
    let response = await req.websiteData.find({key:"1"}).toArray()
    response = response[0]
    

    res.send({attendenceEvents:response.attendenceEvents,attendenceMeetings:response.attendenceMeetings})
})

module.exports = adminAPI
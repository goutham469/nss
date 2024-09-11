const exp = require("express")
const websiteAPI = exp.Router();

websiteAPI.get('/get-data',async (req,res)=>{
    let data = await req.websiteData.find({key:'1'}).toArray()
    res.send(data[0])
})

module.exports = websiteAPI;
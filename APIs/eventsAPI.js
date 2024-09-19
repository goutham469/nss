const exp = require('express')
const DBAccess = require('../Middlewares/DBAccess')
const eventsAPI = exp.Router()

eventsAPI.get('/',(req,res)=>{
    res.send("EVENTS API listening !")
})

eventsAPI.post('/new-event',DBAccess,async (req,res)=>{
    let response = await req.eventsCollection.insertOne(req.body.event)

    res.send(response)
})
eventsAPI.get('/all-events',DBAccess,async(req,res)=>{
    if(req.eventsCollection)
    {
        let response = await req.eventsCollection.find({year:req.query.year}).toArray();
        res.send(response)
    }else{res.send(null)}
})

module.exports = eventsAPI;
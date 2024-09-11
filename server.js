const exp = require("express")
const app = exp()
const mongo = require('mongodb').MongoClient
require('dotenv').config()
const cors = require('cors')

const volunteersAPI = require('./APIs/volunteersAPI')
const adminAPI = require('./APIs/adminAPI')
const websiteAPI = require('./APIs/websiteAPI')

const APICallCounter = require("./Middlewares/APICallCounter")
const DBAccess = require("./Middlewares/DBAccess")
const ReactCounter = require("./Middlewares/ReactCounter")

app.use(exp.json())
app.use(cors())

console.log(process.env.MONGODB_CONNECTION_URL)
mongo.connect(process.env.MONGODB_CONNECTION_URL).then(client=>{
    const DB = client.db("nss")

    const volunteersCollection = DB.collection("volunteers")
    const roolsList = DB.collection("roolslist")
    const websiteData = DB.collection("websiteData")
    const events = DB.collection("events")
    const forms = DB.collection("forms")
    const teams = DB.collection("teams")

    app.set("volunteersCollection",volunteersCollection)
    app.set("roolsList",roolsList)
    app.set("websiteData",websiteData)
    app.set("events",events)
    app.set("forms",forms)
    app.set("teams",teams)

    console.log("mongoDB connected !")
})

app.use(DBAccess)
app.use(APICallCounter)

app.get('/',(req,res)=>{
    res.send("<h1>NSS - VNR VJIET , Server !</h1>")
})

app.get('/initialLoad',ReactCounter)

app.use('/volunteers',volunteersAPI)
app.use('/admin',adminAPI)
app.use('/websiteData',websiteAPI)

app.listen(4000,()=>console.log("server running on PORT 4000"))
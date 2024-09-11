const ReactCounter = async (req,res,next)=>{
    await req.websiteData.updateOne({key:"1"},{$inc:{totalViews:1}});
    res.send({"status":"ok"})
}

module.exports = ReactCounter;
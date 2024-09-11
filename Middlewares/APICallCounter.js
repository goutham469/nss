const APICallCounter = async (req,res,next)=>{
    await req.websiteData.updateOne({key:"1"},{$inc:{apiCalls:1}})

    next();
}

module.exports = APICallCounter;
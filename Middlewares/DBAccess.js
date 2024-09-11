const DBAccess = (req,res,next)=>{
    req.volunteers = req.app.get('volunteersCollection')
    req.roolsList = req.app.get('roolsList')
    req.websiteData = req.app.get('websiteData')
    req.events = req.app.get('events')
    req.forms = req.app.get('forms')
    req.teams = req.app.get('teams')

    next();
}


module.exports = DBAccess
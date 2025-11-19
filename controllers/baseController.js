const utilities = require("../utilities/index")
const baseController = {}

// Build Home view 
baseController.buildHome = async function(req, res){
    const nav = await utilities.getNav()
    req.flash("notice", "This is a flash message.")
    res.render("index",{title: "Home", nav})
}
module.exports = baseController






const maincontroller = {
    index: function(req,res){
        return res.render('index')
    },
    aboutUs: function(req,res){
        return res.render("about-us")
    }    
}

module.exports = maincontroller;

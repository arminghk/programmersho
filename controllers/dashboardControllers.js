

class dashboardControllers {
    constructor(){
       
    }

    getDashboard(req,res){
        res.render('dashboard',{pageTitle:'dashboard',path:'/dashboard',layout:'./layouts/dashLayout'})
    }
    
   

}



module.exports = new dashboardControllers()
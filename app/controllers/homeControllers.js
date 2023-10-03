const Controller = require('./Controller');

class homeControllers extends Controller {
   
    index(req,res){
        res.render('index.ejs',{pageTitle:'programmersho',path:'/'})
       
    
    }

  
    
   

}



module.exports = new homeControllers()
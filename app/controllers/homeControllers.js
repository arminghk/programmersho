const Controller = require('./Controller');

class homeControllers extends Controller {
   
    index(req,res){
       
        res.render('home/index.ejs',{user:req.user})
    
    }

  
    
   

}



module.exports = new homeControllers()
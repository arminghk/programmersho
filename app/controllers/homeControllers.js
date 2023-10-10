const Controller = require('./Controller');

class homeControllers extends Controller {
   
    index(req,res){
        
        res.render('home/index.ejs')
    
    }

  
    
   

}



module.exports = new homeControllers()
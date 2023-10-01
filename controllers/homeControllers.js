

class homeControllers {
    constructor(){
       
    }

    getHome(req,res){
        console.log('req.user---->',req.user);
        res.render('index.ejs',{pageTitle:'Programmersho',path:'/',req})
    
    }
    
   

}



module.exports = new homeControllers()
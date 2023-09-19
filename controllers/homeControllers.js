

class homeControllers {
    constructor(){
       
    }

    getHome(req,res){
        res.render('index.ejs',{pageTitle:'Programmersho',path:'/'})
    
    }
    
   

}



module.exports = new homeControllers()
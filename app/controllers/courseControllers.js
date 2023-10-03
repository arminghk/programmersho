

class courseControllers {
    constructor() {

    }

    getCourses(req,res){
        
        res.render('courses.ejs',{layout:'./layouts/dashLayout',path:'/courses',user:req.user})
    }

    courseForm(req,res){
        
        res.render('courseform.ejs',{layout:'./layouts/dashLayout',path:'/course',user:req.user})
    }



}



module.exports = new courseControllers()
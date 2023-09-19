

class UserControllers {
    constructor(){
       
    }

    getLogin(req,res){
       res.render('login.ejs', { pageTitle: 'login page', path: '/login' })
    }
    postLogin(req,res){
        res.send('login')
     }
     getRegister(req,res){
        res.render('register.ejs', { pageTitle: 'register page', path: '/register' })
     }
     postRegister(req,res){
        res.send('register')
     }

   

}



module.exports = new UserControllers()
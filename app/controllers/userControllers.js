const User = require('./../models/user');
const passport = require('passport');

class UserControllers {
   constructor() {

   }

   getLogin(req, res) {      res.render('users/login.ejs', { pageTitle: 'login page', path: '/login' ,messages:'',user:req.user})

   }
   postLogin(req, res, next) {


      // console.log('req.session----',req.session)

      passport.authenticate('local', {
         failureRedirect: '/users/login',
         // successRedirect: '/dashboard',
         failureFlash: true
      })(req, res, next)

   }
   rememberMe(req, res) {
      if (req.body.rememberme) {
         req.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000
      } else {
         req.session.cookie.expire = null
      }
      res.redirect('/')
   }
   getRegister(req, res) {
      res.render('users/register.ejs', { pageTitle: 'register page', path: '/register',messages:'',user:req.user })
   }
   async postRegister(req, res, next) {
      try {
         const user = await User.findOne({ email: req.body.email })
         
         console.log('req.body--->',req.body);

         if (!user) {
            await User.create(req.body)
            res.redirect('/users/login')
         } else {
            res.send('user is exist')
         }



      } catch (error) {
         next(error)
      }

   }

   logout(req, res) {

      req.logout(function (err) {
         if (err) { return next(err); }
         res.redirect('/');
      });
   }


}



module.exports = new UserControllers()
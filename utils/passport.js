const passport = require('passport');
const {Strategy}=require('passport-local');
const bcrypt = require('bcrypt'); 
const User = require('./../app/models/user');


passport.use(new Strategy({usernameField:'email'},async (email,password,done)=>{
    try {
      const user = await User.findOne({email})
      if (!user) {
        return done(null,false,{message:'user not found'}) 
      }else{
        console.log('password---->',password);
        console.log('user.password---->',user.password);
        const isMatch = await bcrypt.compare(password,user.password)
        console.log('isMatch---->',isMatch);
        if (!isMatch) {
          return done(null,false,{message:'password is incorrect'})
          
        }else{
          return done(null,user)
        }
      }
    } catch (err) {
      next(err)
    }
}));

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id); 
 // where is this user.id going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(async function(id, done) {
  try{
    const user =await User.findById(id)
    done(null,user);
  }catch(err){
    done(null,err);
  }
});



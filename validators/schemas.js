const Joi = require('joi')


const schemas = {
  usercreate: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile:Joi.number().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.ref('password'),
   
  }),
}
module.exports = schemas

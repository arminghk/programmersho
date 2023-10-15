const axios = require('axios')
const captchaIsMandatory = false 
const config = {
    captchaSecretKey:'6Le90L0fAAAAAAQxlc6R8RH0HPdJq5Ym2rtfFOV2',
    captchaVerifyURL:'https://www.google.com/recaptcha/api/siteverify?'
}
const { CAPTCHA_IS_INVALID } = require('./../../errors/errors')

const verifyCaptcha = async (req, res, next) => {
  try {
    if (req.body.captcha == undefined && !captchaIsMandatory) {
      return next()
    }
    req.body.captcha='test'
    const params = {
      secret: config.captchaSecretKey,
      response: req.body.captcha,
      remoteip: req.connection.remoteAddress,
    }

    const query = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&')

   
    
    const verifyURL = `${config.captchaVerifyURL}${query}`
    const { data: result } = await axios.get(verifyURL)
 
    if (result.success !== undefined && !result.success) {
      throw CAPTCHA_IS_INVALID
    } else {
      delete req.body.captcha
      next()
    }
  } catch (err) {
    next(err)
  }
}
module.exports = verifyCaptcha

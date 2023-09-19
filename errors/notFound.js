module.exports = function NotFound(message, code = 404) {
    console.log("-- ERROR NotFound >", message)
  
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
    this.identifier = 'NotFound'
    this.code = code
  }
  
  require('util').inherits(module.exports, Error)
  
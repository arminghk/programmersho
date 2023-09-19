module.exports = function UnexpectedServerError(err) {
  console.log('-- ERROR UnexpectedServerError >', err)

  Error.captureStackTrace(this, this.constructor)
  this.name = err.name || this.constructor.name
  this.message = err.message
  this.identifier = err.identifier || 'UnexpectedServerError'
  this.code = err.code || 500
}

require('util').inherits(module.exports, Error)

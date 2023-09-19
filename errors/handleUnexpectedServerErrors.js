// var debug = require('debug')('Unexpected Server Error Middleware')
const errorResponse = require('./errorResponse')
const UnexpectedServerError = require('./unexpected')

module.exports = function(err, req, res, next) {
  // respond with html page
  // if (req.accepts('html')) {
  //   res.render(errStatusCode, {
  //     url: req.url
  //   })
  //   return
  // }

  // respond with json
  // if (req.accepts('json')) {
  res.send(errorResponse(new UnexpectedServerError(err)))

  return
  // }

  // default to plain-text. send()
  // res.type('txt').send(String(err.message) || __('ERROR_INTERNAL_SERVER'))
}

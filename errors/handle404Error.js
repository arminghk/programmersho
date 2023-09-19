// var debug = require('debug')('404Error Middleware')
const errorResponse = require('./errorResponse')
const NotFoundError = require('../errors/notFound')
module.exports = function(req, res, next) {
  res.status(404)

  // respond with html page
  // if (req.accepts('html')) {
  //   res.render(404, {
  //     url: req.url
  //   })
  //   return
  // }

  // respond with json
  // if (req.accepts('json')) {
  res.send(errorResponse(new NotFoundError(__('NOT_FOUND_ERROR'))))
  return
  // }

  // default to plain-text. send()
  // res.type('txt').send(__('NOT_FOUND_ERROR'))
}

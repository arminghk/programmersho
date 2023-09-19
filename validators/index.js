const Joi = require('joi')
const {
  INVALID_INPUT,
  INVALID_PARAMETER,
  INVALID_QUERY,
} = require('../errors/errors')

const inputValidator = (schema, property) => {
  try {
    return (req, res, next) => {
      if (property === 'query' && req.query.query) {
        try {
          req.query.query = JSON.parse(req.query.query)
        } catch (err) {}
      }

      const { error } = schema.validate(req[property])
      const valid = error == null

      if (valid) {
    
        next()
      } else {
     
        const { details } = error
        console.log('details--->',details);
        const message = details.map(i => i.message).join(',')
        if (property === 'params') {
          throw Object.assign({}, INVALID_PARAMETER, {
            message,
          })
        } else if (property === 'body') {
          throw Object.assign({}, INVALID_INPUT, {
            message
          })
        } else if (property === 'query') {
          throw Object.assign({}, INVALID_QUERY, {
            message,
          })
        }
      }
    }
  } catch (err) {
    next(err)
  }
}

module.exports = inputValidator

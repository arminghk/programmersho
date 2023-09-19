const { UNKNOWN_SERVER_ERROR } = require('./errors')

// const UNKNOWN_SERVER_ERROR = {
//   message: 'Unknown server error',
//   code: 500,
//   identifier: 'unknownServerError',
// }

module.exports = error => {
  return {
    success: false,
    error:
      Object.keys(error).length === 0
        ? Object.assign({}, UNKNOWN_SERVER_ERROR, {
            errorContent: typeof error === 'object' ? error.stack : undefined,
          })
        : error,
  }
}

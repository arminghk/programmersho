const ERRORS = require('./index')

const optimizeError = (err, nestedFieldName) => {
  let customError

  if (
    (err.name == 'CastError' && err.kind == 'ObjectId') ||
    err.identifier == 'noModification'
  ) {
    customError = Object.assign({}, ERRORS.INVALID_PARAMETER_VALUE, {
      baseIdentifier: 'noModification',
    })
  }

  switch (err.code) {
    case 11000:
      // if (err.keyValue && err.keyValue.username) {
      //   customError = ERRORS.USERNAME_IS_DUPLICATE
      // }
      //TODO:APZ: need to detect when it is active email duplicate error!!!!
      if (err.keyValue && err.keyValue.email) {
        customError = ERRORS.EMAIL_IS_DUPLICATE
      }
      if (err.keyValue && err.keyValue.slug) {
        customError = ERRORS.SLUG_IS_DUPLICATE
      }
      if (
        (err.keyValue && err.keyValue.mobileNumber) ||
        (err.errmsg &&
          err.errmsg.indexOf('mobileNumber') > 0 &&
          err.errmsg.indexOf('duplicate key error') > 0)
      ) {
        customError = ERRORS.MOBILENUMBER_IS_DUPLICATE
      }
      if (err.keyValue && err.keyValue.title) {
        customError = ERRORS.TITLE_IS_DUPLICATE
      }
      if (err.keyValue && err.keyValue.name) {
        customError = ERRORS.NAME_IS_DUPLICATE
      }
      if (err.keyValue && err.keyValue.identifier) {
        customError = ERRORS.IDENTIFIER_IS_DUPLICATE
      }
      if (err.keyValue && err.keyValue.code) {
        customError = ERRORS.CODE_IS_DUPLICATE
      }
      if (err.keyValue && err.keyValue.sort) {
        customError = ERRORS.SORT_IS_DUPLICATE
      }
      break

    case 'ENOENT':
      if (err.syscall == 'access') {
        customError = ERRORS.RESOURCE_NOT_FOUND
      }
      break
  }

  if (!err.code) {
    // handling validation errors
    if (err.name === 'ValidationError' && err.errors) {
      if (
        nestedFieldName &&
        err.errors[nestedFieldName] &&
        err.errors[nestedFieldName].errors
      ) {
        customError = Object.assign({}, ERRORS.INVALID_PARAMETER, {
          errors: err.errors[nestedFieldName].errors,
        })
      } else {
        if (err.errors.email && err.errors.email.kind === 'user defined') {
          customError = Object.assign({}, ERRORS.ACTIVE_EMAIL_IS_DUPLICATE, {
            errors: err.errors,
          })
        } else if (
          err.errors.correspondent &&
          err.errors.correspondent.kind === 'required'
        ) {
          customError = Object.assign({}, ERRORS.CORRESPONDENT_IS_REQUIRED)
        } else {
          customError = Object.assign({}, ERRORS.INVALID_PARAMETER, {
            errors: err.errors,
          })
        }
      }
    }

    // handling cast errors
    if (err.name === 'CastError' && err.reason) {
      customError = Object.assign({}, ERRORS.INVALID_PARAMETER_TYPE, {
        path: err.reason.path || err.path,
        kind: err.kind,
        value: err.value,
        // reason: err.reason
      })
    }
  }

  return customError ? customError : err
}

module.exports = optimizeError

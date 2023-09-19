const INVALID_PARAMETER = {
  message: 'Invalid parameter',
  code: 400,
  identifier: 'invalidParameter',
}

const INVALID_PARAMETER_VALUE = {
  message: 'Invalid parameter value',
  code: 400,
  identifier: 'invalidParameterValue',
}

const INVALID_PARAMETER_TYPE = {
  message: 'Invalid parameter type',
  code: 400,
  identifier: 'invalidParameterType',
}

const NOTHING_CREATED = {
  message: 'No record created in the DB',
  code: 400,
  identifier: 'nothingCreated',
}

const INVALID_RESOURCE_FIELD_NAME = {
  message: 'Invalid resource field name',
  code: 404,
  identifier: 'invalidResourceFieldName',
}

const INVALID_RESOURCE_VALUE = {
  message: 'Invalid resource value',
  code: 404,
  identifier: 'invalidResourceValue',
}

const INVALID_TOKEN_ERROR = {
  message: 'Permission denied. token is invalid.',
  code: 400,
  identifier: 'invalidToken',
}

const INVALID_REQUEST = {
  message: 'Invalid request',
  code: 400,
  identifier: 'invalidRequest',
}

const INVALID_QUERY = {
  message: 'Invalid query',
  code: 404,
  identifier: 'invalidQuery',
}

const INVALID_PAYMENT_METHOD = {
  message: 'Invalid payment method',
  code: 400,
  identifier: 'invalidPaymentMethod',
}

const INVALID_PAYMENT_TYPE = {
  message: 'Online payment type did not support',
  code: 400,
  identifier: 'invalidPaymentType',
}

const INVALID_SETTING_IDENTIFIER = {
  message: 'Invalid setting identifier',
  code: 404,
  identifier: 'invalidSettingIdentifier',
}

const RESOURCE_NOT_FOUND = {
  message: 'Resource not found',
  code: 404,
  identifier: 'resourceNotFound',
}

// const USERNAME_IS_DUPLICATE = {
//   message: "'username' is duplicate",
//   code: 400,
//   identifier: 'duplicateUsername',
// }

const JOB_NUMBER_IS_DUPLICATE = {
  message: "'jobNumber' is duplicate",
  code: 400,
  identifier: 'duplicateJobNumber',
}

const SLUG_IS_DUPLICATE = {
  message: "'slug' is duplicate",
  code: 400,
  identifier: 'duplicateSlug',
}

const ACTIVE_EMAIL_IS_DUPLICATE = {
  message: 'there is another active user with same email',
  code: 400,
  identifier: 'duplicateActiveEmail',
}

const EMAIL_IS_DUPLICATE = {
  message: "'email' is duplicate",
  code: 400,
  identifier: 'duplicateEmail',
}

const MOBILENUMBER_IS_DUPLICATE = {
  message: "'mobileNumber' is duplicate",
  code: 400,
  identifier: 'duplicateMobileNumber',
}

const TITLE_IS_DUPLICATE = {
  message: "'title' is duplicate",
  code: 400,
  identifier: 'titleFieldDuplicate',
}

const NAME_IS_DUPLICATE = {
  message: "'name' is duplicate",
  code: 400,
  identifier: 'nameFieldDuplicate',
}

const CODE_IS_DUPLICATE = {
  message: "'code' is duplicate",
  code: 400,
  identifier: 'nameFieldDuplicate',
}

const SORT_IS_DUPLICATE = {
  message: "'sort' is duplicate",
  code: 400,
  identifier: 'nameFieldDuplicate',
}

const IDENTIFIER_IS_DUPLICATE = {
  message: "'identifier' is duplicate",
  code: 400,
  identifier: 'identifierFieldDuplicate',
}

const DUPLICATE_SCHEME_TITLE = {
  message: "'title' is duplicate",
  code: 400,
  identifier: 'duplicateSchemeTitlePerCompany',
}

const PROBLEM_IN_DB = {
  message: 
    'There is a problem in Database, please wait a moment and try again.'
  ,
  code: 500,
  identifier: 'databaseProblem',
}

const USER_NOT_FOUND = {
  message: 'User not found',
  code: 400,
  identifier: 'userNotFound',
}

const USER_IS_INACTIVE = {
  message: 'User is not active',
  code: 400,
  identifier: 'userIsNotActive',
}

const PASSWORD_IS_WRONG = {
  message: 'password is wrong',
  code: 400,
  identifier: 'passwordIsWrong',
}
const OLDPASSWORD_IS_WRONG = {
  message: 'oldPassword is wrong',
  code: 400,
  identifier: 'oldPasswordIsWrong',
}

const UNKNOWN_SERVER_ERROR = {
  message: 'Unknown server error',
  code: 500,
  identifier: 'unknownServerError',
}

const NOTHING_MIDIFIED = {
  message: 'Your query is correct but does not update any record',
  code: 400,
  identifier: 'noModification',
}

const INVALID_ACTION = {
  message: 'Action is invalid',
  code: 400,
  identifier: 'invalidAction',
}

const INVALID_IDENTIFIER = {
  message: 'Invalid identifier',
  code: 400,
  identifier: 'invalidIdentifier',
}

const INVALID_COMPANY = {
  message: 'The company must be a parent company',
  code: 400,
  identifier: 'invalidCompany',
}

const DUPLICATE_REPORT_NAME = {
  message: 'There is another report with same name in this company',
  code: 400,
  identifier: 'duplicateReportName',
}

const DUPLICATE_LINEITEM = {
  message: 'There is another lineItem with same name & company',
  code: 400,
  identifier: 'duplicateLineItem',
}

const DUPLICATE_BILLING_RATE = {
  message: 'There is another billing rate with same description & company',
  code: 400,
  identifier: 'duplicateBillingRate',
}

const DUPLICATE_COST_CENTER = {
  message: 'There is another cost center with same code/title & company',
  code: 400,
  identifier: 'duplicateCostCenter',
}

const DUPLICATE_SKU_PER_BRAND = {
  message: 'There is another product with same brand and sku',
  code: 400,
  identifier: 'duplicateSkuPerBrand',
}

const DUPLICATE_NAME_PER_BRAND = {
  message: 'There is another product with same name and sku',
  code: 400,
  identifier: 'duplicateNamePerBrand',
}

const DUPLICATE_PRODUCT_NAME = {
  message: 'There is another product with same name',
  code: 400,
  identifier: 'duplicateProductName',
}

const MAXIMUM_EXCEEDED = {
  message: 'You can not add more nested objects to this record',
  code: 400,
  identifier: 'maximumNestedObjectsExceeded',
}

const INVALID_SCOPE = {
  message: 'Invalid scope',
  code: 400,
  identifier: 'invalidScope',
}

const INVALID_ORDER_ADDRESS = {
  message: 'Invalid receiver address/zip code',
  code: 400,
  identifier: 'invalidOrderAddress',
}

const API_RATE_LIMIT_SEND_SMS = {
  message: 
    'Too much API request. You can call this API every 2 minutes. Please wait and try again.'
  ,
  code: 400,
  identifier: 'apiRateLimit',
}

const MOBILE_NUMBER_ALREADY_REGISTERED = {
  message: 
    'The mobile number you have entered is already registered, please login'
  ,
  code: 400,
  identifier: 'alreadyRegistered',
}

const INVALID_PASSWORD = {
  message: 'Invalid password. It must be atleast 6 characters.',
  code: 400,
  identifier: 'invalidPassword',
}

const QUANTITY_IS_HIGHER_THAN_MAX = {
  message: 'Quantity is higher than maximum order count',
  code: 400,
  identifier: 'invalidProductQuantity',
}

const QUANTITY_IS_LOWER_THAN_MIN = {
  message: 'Quantity is lower than minimum order count',
  code: 400,
  identifier: 'invalidProductQuantity',
}

const QUANTITY_IS_HIGHER_THAN_AVAILABLE = {
  message: 'Quantity is higher than available count',
  code: 400,
  identifier: 'invalidProductQuantity',
}

const PRODUCT_IS_OUT_OF_STOCK = {
  message: 'Product is out of stock',
  code: 400,
  identifier: 'invalidProductQuantity',
}

const INVALID_PRODUCT_IN_LIST = {
  message: 'Some products in list are invalid',
  code: 400,
  identifier: 'invalidProductList',
}

const INVALID_IDLIST = {
  message: 'The IdList is not correct',
  code: 400,
  identifier: 'invalidIdList',
}

const EMPTY_PRODUCT_LIST = {
  message: 'Product list is empty',
  code: 400,
  identifier: 'emptyProductList',
}

const CART_PRICE_IS_LOWER_THAN_MIN = {
  message: 'Minimum cart price for checkout is not necessary',
  code: 400,
  identifier: 'cartPriceIsLowerThanMinimum',
}

const NOTE_IS_REQUIRED = {
  message: 'Note is required',
  code: 400,
  identifier: 'noteIsRequired',
}

const SELECTION_TYPE_IS_REQUIRED = {
  message: 'assignedForSelectionType is required',
  code: 400,
  identifier: 'selectionTypeIsRequired',
}

const SELECTION_TYPE_IS_INVALID = {
  message: 'assignedForSelectionType value is invalid',
  code: 400,
  identifier: 'selectionTypeIsInvalid',
}

const BOOKING_TYPE_IS_REQUIRED = {
  message: 'bookingType is required',
  code: 400,
  identifier: 'bookingTypeIsRequired',
}

const CONSULTATION_TYPE_IS_REQUIRED = {
  message: 'assignedConsultationType is required',
  code: 400,
  identifier: 'consultationTypeIsRequired',
}

const CONSULTATION_TYPE_IS_INVALID = {
  message: 'assignedConsultationType value is invalid',
  code: 400,
  identifier: 'consultationTypeIsInvalid',
}

const INVALID_JOB_FOR_ASSIGN_BACK = {
  message: 'Invalid job for assign back action',
  code: 400,
  identifier: 'jobForAssignBackIsInvalid',
}

const INVALID_JOB_FOR_ASSIGN = {
  message: 'Invalid job for assign action',
  code: 400,
  identifier: 'jobForAssignIsInvalid',
}

const CORRESPONDENT_IS_REQUIRED = {
  message: '"correspondent" is required',
  code: 400,
  identifier: 'correspondentIsRequired',
}

const DATA_FILE_IS_REQUIRED = {
  message: 'Data File is required',
  code: 400,
  identifier: 'fileIsRequired',
}

const ONLY_EXCEL_FILES_ALLOWED = {
  message: 'Only excel files with extention .xlsx are allowed',
  code: 400,
  identifier: 'onlyExcelFilesAllowed',
}

const INVALID_EMPTY_BRAND = {
  message: 'Empty brand not allowed',
  code: 400,
  identifier: 'EmptyBrandNotAllowed',
}

const INVALID_EMPTY_CATEGORY = {
  message: 'Empty category not allowed',
  code: 400,
  identifier: 'EmptyCategotyNotAllowed',
}

const INVALID_EMPTY_ARRAY = {
  message: 'The array is empty to be modified',
  code: 400,
  identifier: 'invalidEmptyArray',
}

const INVALID_JOB_STATUS = {
  message: 'Only job with "New" or "Booked" statuses could be updated',
  code: 400,
  identifier: 'invalidJobStatus',
}

const INVALID_JOB_STATUS_VALUE = {
  message: 'Job status value is not valid',
  code: 400,
  identifier: 'invalidJobStatusValue',
}

const INVALID_STATUS_CONVERSION = {
  message: 
    'The current job status can not be changed to the new job status'
  ,
  code: 400,
  identifier: 'invalidStatusConversion',
}

const UNAUTHORIZED_JOB_STATUS = {
  message: 'This job status is not allowed to perform this action',
  code: 400,
  identifier: 'unauthorizedJobStatus',
}

const UNMATCHED_COMPANY = {
  message: 'The company in scheme and job should be the same',
  code: 400,
  identifier: 'unmatchedCompany',
}

const UNMATCHED_COMPANY_REPORT = {
  message: 'The companyReport in scheme and job should be the same',
  code: 400,
  identifier: 'unmatchedCompanyReport',
}

const INVALID_ESTIMATED_PRICE = {
  message: 'All options with "Upgrade" level must have estimated price',
  code: 400,
  identifier: 'invalidEstimatedPrice',
}

const DUPLICATE_VERSION_PER_JOB = {
  message: 'A job version with the same ID and Job exists',
  code: 400,
  identifier: 'duplicateVersionPerJob',
}

const NO_SIGNED_JOB_VERSION = {
  message: 'This job has no signed job version',
  code: 400,
  identifier: 'noSignedJobVersion',
}

const PRIMARY_SIGNATURE_IS_REQUIRED = {
  message: 'Primary signature image is required',
  code: 400,
  identifier: 'primarySignatureIsRequired',
}

const UNAUTHROIZED_COMPANY_USER = {
  message: 'You are not authorized to do this action for this company',
  code: 400,
  identifier: 'unauthorizedCompanyUser',
}

const INVALID_EMAIL_ARRAY = {
  message: 'There is no email address to send notification',
  code: 400,
  identifier: 'invalidEmailArray',
}

const UNAUTHORIZED_EMAIL_REQUEST = {
  message: 'The user is not authorized to send this request',
  code: 400,
  identifier: 'unauthorizedEmailRequest',
}

const INVALID_SELECTION = {
  message: 'This selection is not valid to sign',
  code: 400,
  identifier: 'invalidSelection',
}
const DUPLICATE_SUPPLIER = {
  message: 'Another supplier with the same name and company exists',
  code: 400,
  identifier: 'duplicateSupplier',
}

const INVALID_TEMPLATE_PATH = {
  message: 'The selected template is incorrect',
  code: 400,
  identifier: 'invalidTemplatePath',
}

const UNAUTHORIZED_COMPANY_USER = {
  message: 'The user is not authorized to perform this action',
  code: 400,
  identifier: 'unauthorizedCompanyUser',
}

const UNAUTHORIZED_BOOKING_TYPE = {
  message: 
    'Job with this booking type is not authorized to perform this action'
  ,
  code: 400,
  identifier: 'unauthorizedBookingType',
}

const INVALID_JOB_FILES = {
  message: 'All required job files must be uploaded before assignment',
  code: 400,
  identifier: 'invalidJobFiles',
}

const UNEXPIRED_RESET_PASSWORD_TOKEN = {
  message: 
    'You can not request for new token until the expiration time exceeds'
  ,
  code: 400,
  identifier: 'unexpiredResetPasswordToken',
}

const DUPLICATE_ROLE = {
  message: 'Role in each portal must be unique',
  code: 400,
  identifier: 'duplicateRole',
}

const DUPLICATE_PACKAGE = {
  message: 'Another package with same name and company exists',
  code: 400,
  identifier: 'duplicatePackage',
}

const DUPLICATE_CUSTOMER = {
  message: 'Another customer with same primaryEmail and company exists',
  code: 400,
  identifier: 'duplicateCustomer',
}

const INVALID_PACKAGE_LIST = {
  message: 'Packages that are connected to jobs can not be deleted',
  code: 400,
  identifier: 'invalidPackageList',
}

const DUPLICATE_PERMISSION = {
  message: 'Another permission with same moduleName exists in this role',
  code: 400,
  identifier: 'duplicatePermission',
}

const DUPLICATE_PAGE = {
  message: 'Another page with same image exists in this markup',
  code: 400,
  identifier: 'duplicatePage',
}

const DUPLICATE_SHOWROOM_NAME = {
  message: 'Another showroom with same name exists for this company',
  code: 400,
  identifier: 'duplicateShowroomName',
}

const UNAUTHORIZED_REQUEST = {
  message: 'You are not authorized',
  code: 401,
  identifier: 'unauthorizedRequest',
}

const UNABLE_TO_REMOVE = {
  message: 'This record can not be deleted',
  code: 400,
  identifier: 'unableToRemove',
}

const INVALID_INPUT = {
  message: 'Please insert all required fields',
  code: 400,
  identifier: 'invalidInput',
}

const INVALID_LOCATION_PREFERENCES = {
  message: 'location preference is not valid',
  code: 400,
  identifier: 'invalidLocationPreferences',
}

const INVALID_FILE = {
  message: 'This file extension is not valid',
  code: 400,
  identifier: 'invalidFile',
}

const TERMS_AND_CONDITIONS_IS_REQUIRED = {
  message: 'Terms and conditions is required',
  code: 400,
  identifier: 'terms&ConditionsIsRequired',
}

const INVALID_MODE = {
  message: 'Mode must be "Admin" or "Company"',
  code: 400,
  identifier: 'invalidMode',
}

const CONFIGURABLE_PRODUCT_WITHOUT_VARIANTS = {
  message: 'Configurable products must have variant fields',
  code: 400,
  identifier: 'configurableProductWithoutVariants',
}

const INVALID_INVOICE_STATUS = {
  message: 'This action is not allowed for invoice with this status',
  code: 400,
  identifier: 'invalidInvoiceStatus',
}

const INVALID_CREDENTIALS = {
  message: 'Invalid login creadentials',
  code: 400,
  identifier: 'invalidCredentials',
}

const UNAUTHORIZED_CUSTOMER = {
  message: 'Customer is not authorized',
  code: 400,
  identifier: 'unauthorizedCustomer',
}

const INVALID_JOB_SELECTIONS = {
  message: 
    'Job selection with upgrade level or multiple options must be confirmed'
  ,
  code: 400,
  identifier: 'invalidJobSelections',
}

const NO_MARKUP_FILE = {
  message: 'This job has no signed markup file',
  code: 400,
  identifier: 'noMarkupFile',
}

const INVALID_JOB_SELECTION_OPTION = {
  message: 'All upgrade job selection options must have estimated price',
  code: 400,
  identifier: 'invalidJobSelectionOption',
}

const INVALID_SCHEME = {
  message: 'No item to create a report',
  code: 400,
  identifier: 'invalidScheme',
}

const INVALID_ALLOWANCE = {
  message: 'All allowance fields must have value',
  code: 400,
  identifier: 'invalidAllowance',
}

const INVALID_PACKAGE = {
  message: 'Invalid package Id',
  code: 400,
  identifier: 'invalidPackage',
}

const INVALID_ENVIRONMENT = {
  message: 'This action is not valid in this environment',
  code: 400,
  identifier: 'invalidEnvironment',
}

const INVALID_BILLING_RATE = {
  message: 'Invalid billing rate',
  code: 400,
  identifier: 'invalidBillingRate',
}

const COMPANY_IS_INACTIVE = {
  message: 'Company is not active',
  code: 400,
  identifier: 'companyIsNotActive',
}

const CAPTCHA_IS_INVALID = {
  message: 'captcha value is invalid',
  code: 400,
  identifier: 'captchaIsInvalid',
}

const UNAUTHORIZED_SUPPLIER_USER = {
  message: 'The user is not authorized to perform this action',
  code: 400,
  identifier: 'unauthorizedSupplierUser',
}

const ERRORS = {
  INVALID_PARAMETER,
  INVALID_PARAMETER_VALUE,
  INVALID_PARAMETER_TYPE,
  INVALID_RESOURCE_FIELD_NAME,
  INVALID_RESOURCE_VALUE,
  INVALID_TOKEN_ERROR,
  INVALID_REQUEST,
  INVALID_QUERY,
  INVALID_ACTION,
  INVALID_IDENTIFIER,
  INVALID_SCOPE,
  INVALID_PASSWORD,
  INVALID_PRODUCT_IN_LIST,
  INVALID_PAYMENT_METHOD,
  INVALID_PAYMENT_TYPE,
  INVALID_ORDER_ADDRESS,
  INVALID_SETTING_IDENTIFIER,
  RESOURCE_NOT_FOUND,
  // USERNAME_IS_DUPLICATE,
  JOB_NUMBER_IS_DUPLICATE,
  SLUG_IS_DUPLICATE,
  ACTIVE_EMAIL_IS_DUPLICATE,
  EMAIL_IS_DUPLICATE,
  MOBILENUMBER_IS_DUPLICATE,
  TITLE_IS_DUPLICATE,
  NAME_IS_DUPLICATE,
  CODE_IS_DUPLICATE,
  SORT_IS_DUPLICATE,
  IDENTIFIER_IS_DUPLICATE,
  PROBLEM_IN_DB,
  USER_NOT_FOUND,
  USER_IS_INACTIVE,
  PASSWORD_IS_WRONG,
  OLDPASSWORD_IS_WRONG,
  UNKNOWN_SERVER_ERROR,
  NOTHING_MIDIFIED,
  API_RATE_LIMIT_SEND_SMS,
  MOBILE_NUMBER_ALREADY_REGISTERED,
  QUANTITY_IS_HIGHER_THAN_MAX,
  QUANTITY_IS_LOWER_THAN_MIN,
  QUANTITY_IS_HIGHER_THAN_AVAILABLE,
  PRODUCT_IS_OUT_OF_STOCK,
  EMPTY_PRODUCT_LIST,
  CART_PRICE_IS_LOWER_THAN_MIN,
  NOTE_IS_REQUIRED,
  SELECTION_TYPE_IS_REQUIRED,
  BOOKING_TYPE_IS_REQUIRED,
  CONSULTATION_TYPE_IS_REQUIRED,
  SELECTION_TYPE_IS_INVALID,
  CONSULTATION_TYPE_IS_INVALID,
  INVALID_JOB_FOR_ASSIGN_BACK,
  INVALID_JOB_FOR_ASSIGN,
  CORRESPONDENT_IS_REQUIRED,
  DATA_FILE_IS_REQUIRED,
  ONLY_EXCEL_FILES_ALLOWED,
  INVALID_EMPTY_BRAND,
  INVALID_COMPANY,
  DUPLICATE_REPORT_NAME,
  MAXIMUM_EXCEEDED,
  INVALID_IDLIST,
  NOTHING_CREATED,
  DUPLICATE_SCHEME_TITLE,
  INVALID_EMPTY_ARRAY,
  INVALID_JOB_STATUS,
  INVALID_JOB_STATUS_VALUE,
  INVALID_STATUS_CONVERSION,
  UNAUTHORIZED_JOB_STATUS,
  UNMATCHED_COMPANY,
  INVALID_ESTIMATED_PRICE,
  INVALID_EMPTY_CATEGORY,
  DUPLICATE_SKU_PER_BRAND,
  DUPLICATE_PRODUCT_NAME,
  DUPLICATE_VERSION_PER_JOB,
  NO_SIGNED_JOB_VERSION,
  PRIMARY_SIGNATURE_IS_REQUIRED,
  DUPLICATE_LINEITEM,
  UNMATCHED_COMPANY_REPORT,
  UNAUTHROIZED_COMPANY_USER,
  INVALID_EMAIL_ARRAY,
  UNAUTHORIZED_EMAIL_REQUEST,
  INVALID_SELECTION,
  DUPLICATE_SUPPLIER,
  INVALID_TEMPLATE_PATH,
  UNAUTHORIZED_COMPANY_USER,
  UNAUTHORIZED_BOOKING_TYPE,
  INVALID_JOB_FILES,
  UNEXPIRED_RESET_PASSWORD_TOKEN,
  DUPLICATE_ROLE,
  DUPLICATE_PACKAGE,
  INVALID_PACKAGE_LIST,
  DUPLICATE_PERMISSION,
  UNAUTHORIZED_REQUEST,
  DUPLICATE_CUSTOMER,
  UNABLE_TO_REMOVE,
  INVALID_INPUT,
  DUPLICATE_PAGE,
  DUPLICATE_SHOWROOM_NAME,
  DUPLICATE_BILLING_RATE,
  DUPLICATE_COST_CENTER,
  INVALID_LOCATION_PREFERENCES,
  INVALID_FILE,
  TERMS_AND_CONDITIONS_IS_REQUIRED,
  INVALID_MODE,
  CONFIGURABLE_PRODUCT_WITHOUT_VARIANTS,
  INVALID_INVOICE_STATUS,
  INVALID_CREDENTIALS,
  UNAUTHORIZED_CUSTOMER,
  INVALID_JOB_SELECTIONS,
  NO_MARKUP_FILE,
  DUPLICATE_NAME_PER_BRAND,
  INVALID_JOB_SELECTION_OPTION,
  INVALID_SCHEME,
  INVALID_ALLOWANCE,
  INVALID_PACKAGE,
  INVALID_ENVIRONMENT,
  INVALID_BILLING_RATE,
  COMPANY_IS_INACTIVE,
  CAPTCHA_IS_INVALID,
  UNAUTHORIZED_SUPPLIER_USER,
}

module.exports = ERRORS

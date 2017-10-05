const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// event handler for registration form
const registerUser = function (event) {
  event.preventDefault()
  let data = getFormFields(this)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    console.log('info invalid')
    $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
    $('#errorMessage').text('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match. Try again!' + ' </p></div>')
  } else {
    appApi.addUser(data)
      .then(appUi.onSignupSuccess)
      .catch(appUi.onSignupFailure)
  }
}

// event handler for login form
const loginUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.userLogin(data)
    .then(appUi.onSigninSuccess)
    .catch(appUi.onSigninFailure)
}

module.exports = {
  registerUser,
  loginUser
}

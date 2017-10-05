'use strict'

const app = require('../app.js')
// const appEvents = require('./events.js')

// on sign up success -- this is the most recent
const onSignupSuccess = function () {
  console.log('sign-up success')
  // $('#errorMessage').empty()
  // $('#errorMessageModalSignUp').empty()
  $('#registration').hide()
  // $('.modal-footer-reg').hide()
  // $('#loginButton2').show()
  // $('.cancel').show()
  // // $('#loginButton2').show()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Please login. </p></div>')
}

module.exports = {
  onSignupSuccess
}

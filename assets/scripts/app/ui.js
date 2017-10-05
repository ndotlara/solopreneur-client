'use strict'

const app = require('../app.js')
// const appEvents = require('./events.js')

// on sign up success -- this is the most recent
const onSignupSuccess = function () {
  console.log('sign-up success')
  $('#errorMessage').empty()
  $('#errorMessageModalSignUp').empty()
  $('#registration').hide()
  $('.modal-footer-reg').hide()
  $('#loginButton2').show()
  $('.cancel').show()
  $('#loginButton2').show()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>Welcome! You can now log in. </p></div>')
}

const onSigninSuccess = function(data) {
  // console.log(data.user)
  app.user = data.user
  $('#login input').not('.submit').val('')
  $('#passChange').show()
  $('.register-button').hide()
  $('.login-button').hide()
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
  $('#login').hide()
  $('.modal-footer-login').hide()
  $('#myAccountButton').show()
  $('#myAccountButton2').hide()
  $('#log-out-btn').show()
  $('#showChangePassButton').show()
  $('#passChange').show()
  $('.modal-footer-changepwd').show()
  $('.yay-message').empty()
  // console.log('sign in successful')
}

module.exports = {
  onSignupSuccess,
  onSigninSuccess
}

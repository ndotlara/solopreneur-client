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
  $('#loginButton').show()
  $('.cancel').show()
  $('#loginButton2').show()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>Welcome! You can now log in. </p></div>')
}

const onSignupFailure = () => {
  $('#errorMessageModalSignUp').empty()
  $('#errorMessage').empty()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#errorMessageModalSignUp').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

const onSigninSuccess = function (data) {
  console.log('sign-in success')
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
  // $('#myAccountButton2').hide()
  $('#log-out-btn').show()
  $('#showChangePassButton').show()
  $('#passChange').show()
  $('.modal-footer-changepwd').show()
  $('.yay-message').empty()
  $('.register-button').hide()
  $('#welcome-cover').hide()
  $('#on-login-cover').show()
}

const onResetSuccess = function () {
  $('#reset-success').empty()
  console.log('password has been reset')
  $('#passChange input').not('.submit').val('')
  $('#passChange').hide()
  $('.modal-footer-changepwd').hide()
  $('#myAccountButton2').show()
  $('#reset-success').prepend('<div class="row" style="text-align: center; color: black"> <p><br>Your password has been reset.</p></div>')
}

const onLogoutSuccess = function (app) {
  console.log('logged out')
  $('.errorMessageModalLogin').empty()
  $('#myAccountButton').hide()
  $('.myAccountSection').hide()
  $('#myAccountButton2').hide()
  $('#login').show()
  $('.register-button').show()
  $('.login-button').show()
  $('#loginButton').show()
  $('.modal-footer-login').show()
  $('#registration').show()
  $('.modal-footer-reg').show()
  $('#log-out-btn').hide()
  $('#passChange').hide()
  $('#errorMessage').empty()
  $('#errorMessageModalSignUp').empty()
  $('#signUpSuccess').empty()
  $('#survey').hide()
  $('#showChangePassButton').hide()
  $('.yay-message').empty()
  $('#cover').show()
  $('#dashboard-view').hide()
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  // onSignInFailure,
  onLogoutSuccess,
  // onLogoutFailure,
  onResetSuccess
  // onResetFailure
  // onCreateEventSuccess,
  // onCreateEventFailure,
  // onDeleteEventSuccess,
  // onDeleteEventFailure,
  // onUpdateEventSuccess,
  // onUpdateEventFailure,
  // onCreateCommentSuccess,
  // onCreateCommentFailure,
  // onDeleteCommentSuccess,
  // onDeleteCommentFailure,
  // onUpdateCommentSuccess,
  // onUpdateCommentFailure
}

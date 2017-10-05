const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// register event
const registerUser = function (e) {
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

// login event
const loginUser = function (e) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.userLogin(data)
    .then(appUi.onSigninSuccess)
    .catch(appUi.onSigninFailure)
}

// logout event
const logoutUser = function () {
  event.preventDefault(event)
  appApi.userLogout()
    .then(appUi.onLogoutSuccess)
    .catch(appUi.onLogoutFailure)
}

// password change event
const resetPassword = function (e) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.passwordReset(data)
    .then(appUi.onResetSuccess)
    .catch(appUi.onResetFailure)
}

const createEvent = function (e) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.newEvent(data)
    .then(appUi.onCreateEventSuccess)
    .catch(appUi.onCreateEventFailure)
}

const deleteEvent = function (deleteEventId) {
  appApi.deleteEvent(deleteEventId)
    .then(appUi.onDeleteEventSuccess)
    .catch(appUi.onDeleteEventFailure)
}

const updateEvent = function (eventID, data) {
  appApi.updateAnEvent(eventId, data)
  .then(appUi.onUpdateEventSuccess)
  .catch(appUi.onUpdateEventFailure)
}

const createComment = function (e) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.newComment(data)
    .then(appUi.onCreateCommentSuccess)
    .catch(appUi.onCreateCommentFailure)
}

const deleteComment = function (deleteCommentId) {
  appApi.deleteComment(deleteCommentId)
    .then(appUi.onDeleteCommentSuccess)
    .catch(appUi.onDeleteCommentFailure)
}

const updateComment = function (commentId, data) {
  appApi.editSurvey(commentId, data)
  .then(appUi.onUpdateCommentSuccess)
  .catch(appUi.onUpdateCommentFailure)
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  createEvent,
  deleteEvent,
  updateEvent,
  createComment,
  deleteComment,
  updateComment
}

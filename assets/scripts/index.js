'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const appEvents = require('../scripts/app/events.js')
// const getFormFields = require('../../lib/get-form-fields')

$(() => {
  setAPIOrigin(location, config)
  $('#on-login-cover').hide()
  $('#registration').on('submit', appEvents.registerUser)
  $('#login').on('submit', appEvents.loginUser)
  $('#log-out-btn').on('click', appEvents.logoutUser)
  // $('#log-out-btn2').on('click', appEvents.logoutUser)
  $('#passChange').on('submit', appEvents.resetPassword)
})

$(document).on('click', '.delete-comment', function (e) {
  event.preventDefault()
  let deleteCommentId = $(this).attr('id')
  appEvents.deleteComment(deleteCommentId)
})

$(document).on('click', '.delete-event', function (e) {
  event.preventDefault()
  let deleteEventId = $(this).attr('id')
  appEvents.deleteEvent(deleteEventId)
})

$(document).on('click', '#loginButton', function (e) {
  e.preventDefault()
  $('.myAccountSection').show()
// $('#passChange').show()
  $('#errorMessageModalLogin').show()
  $('#myAccountButton').hide()
})

$(document).on('click', '#changePwButton', function (e) {
  e.preventDefault()
  $('.myAccountSection').show()
// $('#passChange').show()
  $('#errorMessageModalLogin').show()
  $('#myAccountButton').hide()
})

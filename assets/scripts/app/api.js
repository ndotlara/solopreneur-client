const app = require('./../app.js')

const addUser = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data
  })
}

const userLogin = function (data) {
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const userLogout = function (id) {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })

const passwordReset = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const newEvent = function (data) {
  console.log('event created')
  return $.ajax({
  url: app.host + '/events/',
  headers: {
    Authorization: 'Token token=' + app.user.token
  },
  method: 'POST',
  data: {
    'event': {
      'event_name': data.name,
      'date': data.date,
      'time': data.time,
      'street_address': data.street_address,
      'city': data.city,
      'state': data.state,
      'zip_code': data.zip_code,
      'description': data.description,
      'user_id': data.user_id
    }
}

const updateAnEvent = function (data) {
  console.log('event updated')
  return $.ajax({
  url: app.host + '/events/' + eventID,
  headers: {
    Authorization: 'Token token=' + app.user.token
  },
  method: 'PATCH',
  data: {
    'event': {
      'event_name': data.name,
      'date': data.date,
      'time': data.time,
      'street_address': data.street_address,
      'city': data.city,
      'state': data.state,
      'zip_code': data.zip_code,
      'description': data.description,
      'user_id': data.user_id
    }
}

const deleteEvent = function(deleteId) {
  return $.ajax({
    url: app.host + '/surveys/' + deleteId,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const viewAllEvents = function () {
  return $.ajax({
    url: app.host + '/events',
    method: 'GET'
  })
}

const viewOneEvent = function (eventID) {
  return $.ajax({
    url: app.host + '/events/' + eventID,
    method: 'GET'
  })
}

const editProfile = function (data) {
  console.log('profile updated')
  return $.ajax({
  url: app.host + '/users/' + userId,
  headers: {
    Authorization: 'Token token=' + app.user.token
  },
  method: 'PATCH',
  data: {
    'user': {
      'first_name': user.first_name,
      'last_name': user.last_name,
      'company': user.company,
      'title': user.title,
      'city': user.city,
      'state': user.state,
      'bio': user.bio,
      'interests': user.interests
    }
}

const newComment = function (data) {
  return $.ajax({
    url: app.host + '/comments',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    data: {
      'comment': {
        'user_id': comment.user_id,
        'event_id': comment.event_id,
        'comment_body': comment.comment_body
      }
  })
}

const editComment = function (data) {
  return $.ajax({
    url: app.host + '/comments/' + commentID,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'comment': {
        'user_id': comment.user_id,
        'event_id': comment.event_id,
        'comment_body': comment.comment_body
      }
  })
}

const deleteComment = function(deleteId) {
  return $.ajax({
    url: app.host + '/comments/' + deleteID,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  addUser,
  userLogin,
  userLogout,
  passwordReset,
  newEvent,
  updateAnEvent,
  deleteEvent,
  viewAllEvents,
  viewOneEvent,
  editProfile,
  newComment,
  editComment,
  deleteComment
  // viewEventComments
}

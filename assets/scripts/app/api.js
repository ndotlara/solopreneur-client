const app = require('./../app.js')
const config = require('./../config.js')

const addUser = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const userLogin = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
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
    url: config.apiOrigin + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const passwordReset = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const newEvent = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/events/',
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
  })
}

const updateAnEvent = function (eventId, data) {
  // console.log('event updated')
  return $.ajax({
    url: config.apiOrigin + '/events/' + eventId,
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
  })
}

const deleteEvent = function (deleteId) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + deleteId,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const viewAllEvents = function () {
  return $.ajax({
    url: config.apiOrigin + '/events',
    method: 'GET'
  })
}

const viewOneEvent = function (eventID) {
  return $.ajax({
    url: config.apiOrigin + '/events/' + eventID,
    method: 'GET'
  })
}

const editProfile = function (id, data) {
  // console.log('profile updated')
  return $.ajax({
    url: config.apiOrigin + '/users/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data: {
      'user': {
        'first_name': app.user.first_name,
        'last_name': app.user.last_name,
        'company': app.user.company,
        'title': app.user.title,
        'city': app.user.city,
        'state': app.user.state,
        'bio': app.user.bio,
        'interests': app.user.interests
      }
    }
  })
}

const newComment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/comments',
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
    }
  })
}

const editComment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + commentID,
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
    }
  })
}

const deleteComment = function (deleteId) {
  return $.ajax({
    url: config.apiOrigin + '/comments/' + deleteID,
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

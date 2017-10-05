const app = require('./../app.js')

const addUser = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data
  })
}



module.exports = {
  addUser
}

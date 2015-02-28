var db = require('../db');



// to write!
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {},
    // a function which can be used to insert a message into the database
    post: function () {}
  },

  users: {
    // Ditto as above.
    // get chat history for a specific user? get list of users?
    get: function () {},
    // create a new user?
    post: function () {}
  }
};


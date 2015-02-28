var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  // a call to .../classes/messages/... will come here
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {},
    // a function which handles posting a message to the database
    post: function (req, res) {}
  },


  // a call to .../classes/users... will come here
  users: {

    // when client wants to see all chats for a user
    // .../classes/users/marcus
    get: function (req, res) {},
    // adding a user to the database?
    post: function (req, res) {}
  }

  // need a third one here for rooms?
};


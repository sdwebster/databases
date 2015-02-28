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


  // a call to .../classes/users/... will come here
  users: {

    // ???a function which handles a get request for all users?
    // or: when a message is posted,
    // go see whether a user needs to be added?
    //
    get: function (req, res) {},
    // a function which handles adding a user to the database?
    post: function (req, res) {}
  }

  // need a third one here for rooms?
};


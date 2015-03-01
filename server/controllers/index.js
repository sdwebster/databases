var models = require('../models');
var bluebird = require('bluebird');


// the controllers handle the request object and delegate
// action to the models
module.exports = {
  // a call to .../classes/messages/... will come here
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      // console.log('i dream a get and get on by');
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      models.messages.post(req.body, function(){
        res.writeHead(201);
        console.log('cb two');
        res.end();
      });
    }
  },


  // a call to .../classes/users... will come here
  users: {

    // when client wants to see all chats for a user
    // .../classes/users/marcus
    get: function (req, res) {},
    // adding a user to the database?
    post: function (req, res) {
      console.log('controller passes on a post to users')
      models.users.post(req.body.username, function(){
        res.writeHead(201);
        console.log("ain't no callerback girl");
        res.end();
      });
    }
  }

  // need a third one here for rooms?
};


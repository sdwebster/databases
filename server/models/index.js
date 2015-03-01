var db = require('../db');


// to write!
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {},
    // a function which can be used to insert a message into the database
    post: function (reqBody, cb) {
      console.log(reqBody);
      console.log('username: ', reqBody.username);
      console.log('message: ', reqBody.message);
      console.log('roomname: ', reqBody.roomname);


      // lookup user ID based on the username
      var userNumQuery = "SELECT userID from users where username = '" + reqBody.username + "'";
      var userNum;
      db.dbConnection.query(userNumQuery, function(err, rows){
        if (err) {throw err;}
        console.log('username logged');
        userNum = rows[0].userID;
        console.log(userNum);
        var qs = "INSERT into messages (userID, roomname, messageText) \
          values ('" + userNum + "," + reqBody.roomname + "," + "reqBody.message" + ")";
        db.dbConnection.query(qs, function(err){
          if (err) throw err;
          console.log('query exected');
          cb.call();
        });
      });

    }
  },

  users: {
    // Ditto as above.
    // get chat history for a specific user? get list of users?
    get: function () {},
    // create a new user?
    post: function (username, cb) {
      // console.log('My name is Jean', username);
      var qs = "INSERT into users (username) values ('" + username + "')";
      db.dbConnection.query(qs, function(err){
        if (err) {throw err;}
        // console.log('query exected');
        cb.call();
      });
    }
  }
};


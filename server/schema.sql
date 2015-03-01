/*drop stuff?*/
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  messageID INT(11) NOT NULL AUTO_INCREMENT,
  userID INT(11),
  -- roomID INT(11),
  roomname varchar(255),
  /* posted TIMESTAMP, */
  messageText TEXT(255),
  PRIMARY KEY  (messageID)
);

CREATE TABLE users (
  userID INT(11) NOT NULL AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY  (userID)
);

CREATE TABLE rooms (
  roomID INT(11) NOT NULL AUTO_INCREMENT,
  roomname varchar(255),
  PRIMARY KEY  (roomID)
);


ALTER TABLE messages ADD CONSTRAINT messages_fk1
  FOREIGN KEY (userID) REFERENCES users(userID);
-- ALTER TABLE messages ADD CONSTRAINT messages_fk2
--   FOREIGN KEY (roomID) REFERENCES rooms(roomID);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


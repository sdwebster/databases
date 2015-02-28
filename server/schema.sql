/*drop stuff?*/
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  ID int(11) NOT NULL auto_increment, PRIMARY KEY (ID),
  /* maybe rewrite these two wth userID or roomID? */
  username varchar(255),
  messageText varchar(141),
  room varchar(255),
  posted DATE
);

CREATE TABLE users (
  userID int(11) NOT NULL auto_increment, PRIMARY KEY (userID),
  username varchar(255)
);

CREATE TABLE rooms (
  roomID int(11) NOT NULL auto_increment, PRIMARY KEY (roomID),
  roomName varchar(255)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


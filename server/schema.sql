/*drop stuff?*/
DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (
  /* Describe your table here.*/
  name varchar(8)
  -- messageID
  -- username (or reference users table)
  -- text
  -- room (reference rooms table)
  -- timestamp
);

/* Create other tables and define schemas for them here! */

-- Create Table for Users
  -- Columns:
  --username (add a hash)
  --userID

-- Create Table for Rooms
  --roomname (add a hash)
  --roomID


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


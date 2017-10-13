CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  itemname VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  startingbid INT default 0,
  highestbid INT default 0,
  PRIMARY KEY (id)
);

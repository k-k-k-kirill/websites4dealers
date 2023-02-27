CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  company VARCHAR(100) NOT NULL,
  street VARCHAR(100) NOT NULL,
  street_number VARCHAR(10) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state_name VARCHAR(100) NOT NULL,
  zip_code VARCHAR(10) NOT NULL,
  password VARCHAR(255) NOT NULL
);
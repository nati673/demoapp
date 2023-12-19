-- Customers tables  
CREATE TABLE IF NOT EXISTS `employee_test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (email)) ENGINE=InnoDB;

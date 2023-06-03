-- Create the volunteers table -- 
CREATE TABLE IF NOT EXISTS volunteers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  role VARCHAR(50) NOT NULL
);

-- Create the roles table if it doesn't exist --
CREATE TABLE IF NOT EXISTS roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  location VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL
);

-- Create the role_volunteers table --
CREATE TABLE IF NOT EXISTS role_volunteers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role_id INT NOT NULL,
  volunteer_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (volunteer_id) REFERENCES volunteers(id)
);

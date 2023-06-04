/* 
// database
+-------------------+  +-------------------+  +-------------------+
|       users       |  |       roles       |  |     volunteers    |
+-------------------+  +-------------------+  +-------------------+
| id                |  | id                |  | id                |
| name              |  | volunteer_id      |  | user_id           |
| email             |  | position          |  | role_id           |
| password          |  | description       |  +-------------------+
| admin             |  | date              |
+-------------------+  +-------------------+
 */


-- users table --
-- (users are people who can login to the app) --
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  admin BOOLEAN NOT NULL DEFAULT FALSE
);

-- roles table  --
-- (roles are positions that need to be filled by a volunteer) --
CREATE TABLE IF NOT EXISTS roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  volunteer_id INT NOT NULL,
  position VARCHAR(100) NOT NULL,
  description VARCHAR(100) NOT NULL,
  date DATE NOT NULL
  -- filled BOOLEAN NOT NULL DEFAULT FALSE,
);

-- volunteers table 
-- (volunteers are users who are scheduled to serve) --
CREATE TABLE IF NOT EXISTS volunteers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL, /* user that is volunteering */
  role_id INT NOT NULL, /* role user is volunteering for */
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- view showing all roles that a volunteer is scheduled for --
CREATE VIEW volunteer_schedule AS 
SELECT users.name, roles.position, roles.date
FROM users
JOIN volunteers ON users.id = volunteers.user_id
JOIN roles ON roles.id = volunteers.role_id;


-- view showing all roles and the volunteers scheduled for them show role even if no volunteer is scheduled --
CREATE VIEW role_schedule AS
SELECT roles.position, roles.date, users.name
FROM roles
LEFT JOIN volunteers ON roles.id = volunteers.role_id
LEFT JOIN users ON volunteers.user_id = users.id;


/* 
// database
+-------------------+  +-------------------+ 
|       users       |  |       roles       | 
+-------------------+  +-------------------+ 
| id                |  | id                | 
| name              |  | user_id           | 
| email             |  | position          | 
| password          |  | notes             | 
| admin             |  | date              |
+-------------------+  +-------------------+
 */

DROP TABLE IF EXISTS users;
CREATE TABLE
    IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        admin BOOLEAN NOT NULL DEFAULT FALSE,
        blackout_dates VARCHAR(1000),
        txt_alerts BOOLEAN NOT NULL DEFAULT FALSE,
        email_alerts BOOLEAN NOT NULL DEFAULT TRUE
    );

DROP TABLE IF EXISTS teams;
CREATE TABLE
    IF NOT EXISTS teams (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,   -- eg. AV Team
        description VARCHAR(1000) NOT NULL, 
        positions VARCHAR(1000) NOT NULL -- eg. Sound setup, Sound Teardown, AV tech
    );

DROP TABLE IF EXISTS plans;
CREATE TABLE 
    IF NOT EXISTS plans (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,  -- sunday service 
        description VARCHAR(1000) NOT NULL,
        date DATE NOT NULL
    );

DROP TABLE IF EXISTS assignments;
CREATE TABLE 
    IF NOT EXISTS assignments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES users (id),
        plan_id INT,
        FOREIGN KEY (plan_id) REFERENCES plans (id),
        position VARCHAR(100) NOT NULL,
        notes VARCHAR(1000),
        date DATE NOT NULL
    );
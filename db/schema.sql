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

DROP TABLE IF EXISTS plans;
CREATE TABLE 
    IF NOT EXISTS plans (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,  -- sunday service 
        confirmed_count INT NOT NULL,
        pending_count INT NOT NULL,
        declined_count INT NOT NULL,
        description VARCHAR(1000) NOT NULL,
        date DATE NOT NULL
    );


DROP TABLE IF EXISTS teams;
CREATE TABLE 
    IF NOT EXISTS teams (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        plan_id INT,
        FOREIGN KEY (plan_id) REFERENCES plans (id)
    );


DROP TABLE IF EXISTS positions;
CREATE TABLE
    IF NOT EXISTS positions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        team_id INT,
        FOREIGN KEY (team_id) REFERENCES teams (id),
        capacity INT NOT NULL,
        filled INT NOT NULL
    );

DROP TABLE IF EXISTS volunteers;
CREATE TABLE 
    IF NOT EXISTS volunteers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id),
        plan_id INT,
        FOREIGN KEY (plan_id) REFERENCES plans (id),
        position_id INT,
        FOREIGN KEY (position_id) REFERENCES positions (id),
        confirmation_status VARCHAR(100) NOT NULL,
        notes VARCHAR(1000)
    );



-- query to get all volunteers for a givin position 
-- SELECT * FROM volunteers WHERE position_id = 1;

-- SELECT Positions.id, Positions.name
-- FROM Positions
-- JOIN Teams ON Positions.team_id = Teams.id
-- WHERE Teams.id = <team_id>;






-- Active: 1687303757803@@127.0.0.1@3306@volunteers_db
/* 
// database
+-------------------+  +-------------------+ 
|       Users       |  |       roles       | 
+-------------------+  +-------------------+ 
| id                |  | id                | 
| name              |  | user_id           | 
| email             |  | position          | 
| password          |  | notes             | 
| admin             |  | date              |
+-------------------+  +-------------------+
 */



 CREATE DATABASE IF NOT EXISTS volunteers_db;
 USE volunteers_db;

DROP TABLE IF EXISTS Users, Plans, Teams, positions, volunteers;


CREATE TABLE
    IF NOT EXISTS Users (
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

CREATE TABLE 
    IF NOT EXISTS Plans (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,  -- sunday service 
        confirmed_count INT NOT NULL,
        pending_count INT NOT NULL,
        declined_count INT NOT NULL,
        description VARCHAR(1000) NOT NULL,
        date DATE NOT NULL
    );


CREATE TABLE 
    IF NOT EXISTS Teams (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        plan_id INT,
        FOREIGN KEY (plan_id) REFERENCES Plans (id)
    );


CREATE TABLE
    IF NOT EXISTS positions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        team_id INT,
        FOREIGN KEY (team_id) REFERENCES Teams (id),
        capacity_count INT NOT NULL,
        filled_count INT NOT NULL
    );


CREATE TABLE 
    IF NOT EXISTS volunteers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NULL,
        FOREIGN KEY (user_id) REFERENCES Users (id),
        plan_id INT,
        FOREIGN KEY (plan_id) REFERENCES Plans (id),
        position_id INT,
        FOREIGN KEY (position_id) REFERENCES positions (id),
        confirmation_status VARCHAR(100) NOT NULL,
        notes VARCHAR(1000)
    );


-- create view of Plan with a list of all Teams and their Positions and Volunteers


-- create view of Plan with a list of all Teams and for each team match the team_id to a position as a JSON object 
CREATE VIEW plans_view AS
SELECT
    Plans.id AS id,
    Plans.name AS plan_name,
    Plans.date AS plan_date,
    JSON_OBJECT(
        'id', Plans.id,
        'name', Plans.name,
        'confirmed_count', Plans.confirmed_count,
        'pending_count', Plans.pending_count,
        'declined_count', Plans.declined_count,
        'date', Plans.date,
        'Teams', (
            SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                    'id', Teams.id,
                    'name', Teams.name,
                    'description', Teams.description,
                    'positions', (
                        SELECT JSON_ARRAYAGG(
                            JSON_OBJECT(
                                'id', Positions.id,
                                'name', Positions.name,
                                'capacity_count', Positions.capacity_count,
                                'filled_count', Positions.filled_count,
                                'volunteers', (
                                    SELECT JSON_ARRAYAGG(
                                        JSON_OBJECT(
                                            'id', Volunteers.id,
                                            'confirmation_status', Volunteers.confirmation_status,
                                            'notes', Volunteers.notes,
                                            'user', JSON_OBJECT(
                                                'id', Users.id,
                                                'first_name', Users.first_name,
                                                'last_name', Users.last_name
                                            )
                                        )
                                    )
                                    FROM Volunteers
                                    JOIN Users ON Volunteers.user_id = Users.id
                                    WHERE Volunteers.position_id = Positions.id
                                        AND Volunteers.plan_id = Plans.id
                                )
                            )
                        )
                        FROM Positions
                        WHERE Positions.team_id = Teams.id
                    )
                )
            )
            FROM Teams
            WHERE Teams.plan_id = Plans.id
        )
    ) as plan
FROM Plans;








-- query to get all volunteers for a givin position 
-- SELECT * FROM volunteers WHERE position_id = 1;

-- SELECT Positions.id, Positions.name
-- FROM Positions
-- JOIN Teams ON Positions.team_id = Teams.id
-- WHERE Teams.id = <team_id>;






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
        email_alerts BOOLEAN NOT NULL DEFAULT TRUE,
        service_history VARCHAR(1000),
        role_interests VARCHAR(100)
    );

CREATE TABLE
    IF NOT EXISTS roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES users(id),
        user_name VARCHAR(100),
        position VARCHAR(100) NOT NULL,
        notes VARCHAR(100) NOT NULL,
        date DATE NOT NULL,
        confirmed BOOLEAN NOT NULL DEFAULT FALSE
    );

-- drop view 
DROP VIEW volunteers;

CREATE VIEW volunteers AS
SELECT
JSON_OBJECT(
        'id', users.id,
        'first_name', users.first_name,
        'last_name', users.last_name
    ) AS user,
    JSON_ARRAYAGG(JSON_OBJECT(
        'id', roles.id,
        'position', roles.position,
        'date', roles.date,
        'confirmed', roles.confirmed
    )) AS roles
FROM
    roles
LEFT JOIN
    users
ON
    users.id = roles.user_id
GROUP BY
    users.id;



INSERT INTO
    positions (position)
VALUES ('AV Technician'), ('Worship Leader'), ('Childrens Ministry'), ('Greeter'), ('Usher'), ('Parking Attendant'), ('Security'), ('Cafe'), ('Communion'), ('Prayer Team'), ('Welcome Center'), ('Facilities'), ('Office'), ('Other');
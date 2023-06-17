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

-- Might change roles to be teams
-- teams table and each team has different positions, and each position has different users assigned to it
CREATE teams 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    positions VARCHAR(1000) NOT NULL,
    users VARCHAR(1000) NOT NULL,
    date DATE NOT NULL
);

-- insert data into teams 
INSERT INTO
    teams (name, description, positions, users, date)
VALUES ('AV Team', 'Audio/Visual Team', 'Sound setup, AV tech', '1,2', '2020-01-01'),
        ('Worship Team', 'Worship Team', 'Worship Leader, guitar, drums, vocals, piano', '4,5,6,7,8', '2020-01-01'),
        ('Childrens Ministry', 'Childrens Ministry', 'Childrens Ministry', '7,8,9', '2020-01-01'),
        ('Hospitality', 'Hospitality Description', 'Coffee setup, coffee, coffee teardown', '10,11,12', '2020-01-01'),
        ('Setup/Teardown', 'Setup/Teardown description', 'setup, teardown', '13, 14', '2020-01-01');



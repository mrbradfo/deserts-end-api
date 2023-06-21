
-- Dummy data for the 'users' table
INSERT INTO users (first_name, last_name, email, password, admin, blackout_dates, txt_alerts, email_alerts)
VALUES
  ('John', 'Doe', 'john.doe@example.com', 'password123', FALSE, '2023-04-10, 2023-04-17', TRUE, TRUE),
  ('Jane', 'Smith', 'jane.smith@example.com', 'pass456', TRUE, '2023-04-24, 2023-05-01', FALSE, TRUE),
  ('Mike', 'Johnson', 'mike.johnson@example.com', 'secret789', FALSE, '2023-04-17, 2023-04-24', TRUE, FALSE),
  ('Sarah', 'Wilson', 'sarah.wilson@example.com', 'p@ssw0rd', FALSE, '2023-05-08, 2023-05-15', TRUE, TRUE),
  ('Michael', 'Brown', 'michael.brown@example.com', 'secure123', TRUE, '2023-05-22, 2023-05-29', FALSE, TRUE),
  ('Emily', 'Davis', 'emily.davis@example.com', 'mypassword', FALSE, '2023-05-15, 2023-05-22', TRUE, FALSE),
  ('David', 'Anderson', 'david.anderson@example.com', '12345678', TRUE, '2023-05-29, 2023-06-05', TRUE, TRUE),
  ('Olivia', 'Martinez', 'olivia.martinez@example.com', 'pass1234', FALSE, '2023-06-05, 2023-06-12', FALSE, TRUE),
  ('Daniel', 'Garcia', 'daniel.garcia@example.com', 'daniel123', TRUE, '2023-06-12, 2023-06-19', TRUE, FALSE),
  ('Sophia', 'Lopez', 'sophia.lopez@example.com', 'mysecretpass', FALSE, '2023-06-19, 2023-06-26', TRUE, TRUE),
  ('Matthew', 'Hernandez', 'matthew.hernandez@example.com', 'password456', TRUE, '2023-06-26, 2023-07-03', FALSE, TRUE),
  ('Ava', 'Gonzalez', 'ava.gonzalez@example.com', 'test123', FALSE, '2023-07-03, 2023-07-10', TRUE, FALSE),
  ('Ethan', 'Rivera', 'ethan.rivera@example.com', 'myp@ssword', TRUE, '2023-07-10, 2023-07-17', TRUE, TRUE),
  ('Emma', 'Walker', 'emma.walker@example.com', 'mysecret123', FALSE, '2023-07-17, 2023-07-24', TRUE, TRUE),
  ('William', 'Perez', 'william.perez@example.com', 'password789', TRUE, '2023-07-24, 2023-07-31', FALSE, TRUE),
  ('Sofia', 'Robinson', 'sofia.robinson@example.com', 'test456', FALSE, '2023-07-31, 2023-08-07', TRUE, FALSE),
  ('James', 'Cook', 'james.cook@example.com', 'pass12345', TRUE, '2023-08-07, 2023-08-14', TRUE, TRUE),
  ('Charlotte', 'Hill', 'charlotte.hill@example.com', 'mysecretpassword', FALSE, '2023-08-14, 2023-08-21', FALSE, TRUE); 

-- Dummy data for the 'plans' table
INSERT INTO plans (name, confirmed_count, pending_count, declined_count, description, date)
VALUES
  ('Sunday Service', 5, 15, 2, 'Weekly Sunday service', '2023-04-09'),
  ('Volunteer Event', 20, 8, 3, 'Community volunteer event', '2023-04-15');

-- Dummy data for the 'teams' table
INSERT INTO teams (name, description, plan_id)
VALUES
  ('Hospitality Team', 'Team responsible for welcoming and assisting guests', 1),
  ('Technical Team', 'Team responsible for sound and visual setup', 1),
  ('Worship Team', 'Team responsible for leading the congregation in worship', 1),
  ('Childrens Ministry', 'Team responsible for teaching and caring for children', 1),
  ('Teaching', 'Team responsible for teaching and assisting', 1), 
  ('Setup / Teardown', 'Team responsible for setting up and tearing down', 1);
-- Dummy data for the 'positions' table
INSERT INTO positions (name, team_id, capacity_count, filled_count)
VALUES
  ('Coffee', 1, 1, 0),
  ('Sound', 2, 1, 0),
  ('ProPresenter', 2, 1, 0),
  ('Vocals', 3, 1, 0),
  ('Guitar', 3, 1, 0),
  ('Bass', 3, 1, 0),
  ('Drums', 3, 1, 0),
  ('Piano', 3, 1, 0),
  ('Nursery', 4, 2, 0),
  ('Preschool', 4, 2, 0),
  ('Elementary', 4, 2, 0),
  ('Teaching', 5, 2, 0),
  ('Setup', 6, 3, 0),
  ('Teardown', 6, 3, 0);

-- Dummy data for the 'volunteers' table
INSERT INTO volunteers (user_id, plan_id, position_id, confirmation_status, notes)
VALUES
  (1, 1, 1, 'Confirmed', 'Available for the entire service'),
  (2, 1, 2, 'Pending', 'Will confirm by Thursday'),
  (3, 1, 3, 'Declined', 'Unable to attend on that date'),
  (4, 1, 4, 'Pending', 'Will confirm by Thursday'),
  (5, 1, 5, 'Confirmed', 'Available for the entire service'),
  (6, 1, 6, 'Pending', 'Will confirm by Thursday'),
  (7, 1, 7, 'Confirmed', 'Available for the entire service'),
  (8, 1, 8, 'Pending', 'Will confirm by Thursday'),
  (9, 1, 9, 'Pending', 'Will confirm by Thursday'),
  (10, 1, 10, 'Confirmed', 'Available for the entire service'),
  (11, 1, 11, 'Pending', 'Will confirm by Thursday'),
  (12, 1, 12, 'Pending', 'Will confirm by Thursday'),
  (13, 1, 13, 'Confirmed', 'Available for the entire service'),
  (14, 1, 14, 'Pending', 'Will confirm by Thursday');

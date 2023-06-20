-- Dummy data for the 'users' table
INSERT INTO users (first_name, last_name, email, password, admin, blackout_dates, txt_alerts, email_alerts)
VALUES
  ('John', 'Doe', 'john.doe@example.com', 'password123', FALSE, '2023-04-10, 2023-04-17', TRUE, TRUE),
  ('Jane', 'Smith', 'jane.smith@example.com', 'pass456', TRUE, '2023-04-24, 2023-05-01', FALSE, TRUE),
  ('Mike', 'Johnson', 'mike.johnson@example.com', 'secret789', FALSE, '2023-04-17, 2023-04-24', TRUE, FALSE);

-- Dummy data for the 'plans' table
INSERT INTO plans (name, confirmed_count, pending_count, declined_count, description, date)
VALUES
  ('Sunday Service', 10, 5, 2, 'Weekly Sunday service', '2023-04-09'),
  ('Volunteer Event', 20, 8, 3, 'Community volunteer event', '2023-04-15');

-- Dummy data for the 'teams' table
INSERT INTO teams (name, description, plan_id)
VALUES
  ('Hospitality Team', 'Team responsible for welcoming and assisting guests', 1),
  ('Technical Team', 'Team responsible for sound and visual setup', 1),
  ('Event Crew', 'Team responsible for managing event logistics', 2);

-- Dummy data for the 'positions' table
INSERT INTO positions (name, team_id, capacity, filled)
VALUES
  ('Greeter', 1, 5, 3),
  ('Usher', 1, 3, 2),
  ('Sound Engineer', 2, 2, 2),
  ('Stage Crew', 3, 4, 3);

-- Dummy data for the 'volunteers' table
INSERT INTO volunteers (user_id, plan_id, position_id, confirmation_status, notes)
VALUES
  (1, 1, 1, 'Confirmed', 'Available for the entire service'),
  (2, 1, 2, 'Pending', 'Will confirm by Thursday'),
  (3, 2, 4, 'Declined', 'Unable to attend on that date');



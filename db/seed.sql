-- Insert example users --
INSERT INTO users (name, email, password, admin)
VALUES
  ('John Doe', 'john@example.com', 'password123', FALSE),
  ('Jane Smith', 'jane@example.com', 'password456', TRUE),
  ('David Johnson', 'david@example.com', 'password789', FALSE),
  ('Emily Brown', 'emily@example.com', 'password321', FALSE),
  ('Michael Wilson', 'michael@example.com', 'password654', FALSE);

-- Insert example roles --
INSERT INTO roles (volunteer_id, position, description, date)
VALUES
  (1, 'ProPresenter', 'Controls the presentation slides during the event', '2023-04-01'),
  (2, 'AV Technician', 'Handles audio and visual equipment during the event', '2023-04-01'),
  (3, 'Worship Leader', 'Leads the congregation in worship through music', '2023-04-01'),
  (4, 'Childrens Ministry', 'Coordinates activities for children during the event', '2023-04-01'),
  (5, 'Teaching', 'Delivers teaching or sermon during the event', '2023-04-01');

-- Insert example volunteers --
INSERT INTO volunteers (user_id, role_id)
VALUES
  (1, 1), -- John Doe is scheduled to be on ProPresenter
  (2, 2), -- Jane Smith is scheduled to be the AV Technician
  (3, 3), -- David Johnson is scheduled to be the Worship Leader
  (4, 4), -- Emily Brown is scheduled to be in Childrens Ministry
  (5, 5); -- Michael Wilson is scheduled to give the Teaching

-- Insert sample volunteer data 
INSERT INTO volunteers (name, email, phone, role)
VALUES ('John Doe', 'john@example.com', '1234567890', 'ProPresenter'),
       ('Jane Smith', 'jane@example.com', '9876543210', 'Setup and Tear Down'),
       ('Mike Johnson', 'mike@example.com', '5555555555', 'Childrens Ministry'),
       ('Sarah Brown', 'sarah@example.com', '7777777777', 'AV'),
       ('David Wilson', 'david@example.com', '9999999999', 'Coffee');

-- Insert sample event data
INSERT INTO roles (role, date, time, location, description)
VALUES ('ProPresenter', '2019-01-01', '10:00:00', 'Main Auditorium', 'Sunday morning service'),
       ('Setup and Tear Down', '2019-01-01', '10:00:00', 'Main Auditorium', 'Sunday morning service'),
       ('Childrens Ministry', '2019-01-01', '10:00:00', 'Main Auditorium', 'Sunday morning service'),
       ('AV', '2019-01-01', '10:00:00', 'Main Auditorium', 'Sunday morning service'),
       ('Coffee', '2019-01-01', '10:00:00', 'Main Auditorium', 'Sunday morning service');


-- Insert sample event_volunteer data
INSERT INTO role_volunteers (volunteer_id, role_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (1, 5),
       (2, 1),
       (2, 2),
       (2, 3),
       (2, 4),
       (2, 5),
       (3, 1),
       (3, 2),
       (3, 3),
       (3, 4),
       (3, 5),
       (4, 1),
       (4, 2),
       (4, 3),
       (4, 4),
       (4, 5),
       (5, 1),
       (5, 2),
       (5, 3),
       (5, 4),
       (5, 5);

       
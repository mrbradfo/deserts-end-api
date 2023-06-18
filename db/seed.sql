
INSERT INTO
    users (first_name, last_name, email, password, admin, blackout_dates, txt_alerts, email_alerts)
VALUES
    ('John', 'Doe', 'john@example.com', 'password123', FALSE, "", TRUE, FALSE),
    ('Jane', 'Smith', 'jane@example.com', 'password456', TRUE, "", FALSE, TRUE),
    ('David', 'Johnson', 'david@example.com', 'password789', FALSE, "2019-01-01, 2019-01-02", TRUE, TRUE),
    ('Emily', 'Brown', 'emily@example.com', 'password321', FALSE, "2019-01-01, 2019-01-02", FALSE, FALSE),
    ('Michael', 'Wilson', 'michael@example.com', 'password654', FALSE, "", TRUE, TRUE);




INSERT INTO
    teams (name, description, positions)
VALUES
    ('AV Team', 'Audio/Visual Team', '["Sound setup", "Sound Teardown", "AV tech"]'),
    ('Worship Team', 'Worship Team', '["Worship Leader", "guitar", "drums", "vocals", "piano"]'),
    ('Childrens Ministry', 'Childrens Ministry', '["Childrens Ministry"]'),
    ('Hospitality', 'Hospitality Description', '["Coffee setup", "coffee", "coffee teardown"]'),
    ('Setup/Teardown', 'Setup/Teardown description', '["setup", "teardown"]');


INSERT INTO
    plans (name, description, date)
VALUES 
    ('Sunday Service', 'Sunday service description', '2023-11-05'),
    ('Sunday Service', 'Sunday service description', '2023-11-12'),
    ('Sunday Service', 'Sunday service description', '2023-11-19'),
    ('Sunday Service', 'Sunday service description', '2023-11-26'),
    ('Sunday Service', 'Sunday service description', '2023-12-03');

INSERT INTO
    assignments (user_id, plan_id, position, notes, date)
VALUES
    (1, 1, 'Sound setup', 'Sound setup notes', '2023-11-05'),
    (2, 1, 'Sound Teardown', 'Sound Teardown notes', '2023-11-05'),
    (3, 1, 'AV tech', 'AV tech notes', '2023-11-05'),
    (4, 1, 'Worship Leader', 'Worship Leader notes', '2023-11-05'),
    (5, 1, 'guitar', 'guitar notes', '2023-11-05');
-- Insert example users --

INSERT INTO
    users (
        first_name,
        last_name,
        email,
        password,
        admin
    )
VALUES (
        'John',
        'Doe',
        'john@example.com',
        'password123',
        FALSE
    ), (
        'Jane',
        'Smith',
        'jane@example.com',
        'password456',
        TRUE
    ), (
        'David',
        'Johnson',
        'david@example.com',
        'password789',
        FALSE
    ), (
        'Emily',
        'Brown',
        'emily@example.com',
        'password321',
        FALSE
    ), (
        'Michael',
        'Wilson',
        'michael@example.com',
        'password654',
        FALSE
    );

-- Insert example roles --

INSERT INTO
    roles (user_id, position, notes, date)
VALUES (
        2,
        'AV Technician',
        'Handles audio and visual equipment during the event',
        '2023-07-02'
    ), (
        3,
        'Worship Leader',
        'Leads the congregation in worship through music',
        '2023-07-02'
    ), (
        4,
        'Childrens Ministry',
        'Coordinates activities for children during the event',
        '2023-07-02'
    ), (
        5,
        'Teaching',
        'Delivers teaching or sermon during the event',
        '2023-07-02'
    );

--- insert another role with no user id

INSERT INTO
    roles (position, notes, date)
VALUES (
        'ProPresenter',
        'Controls the presentation slides during the event',
        '2023-07-02'
    );
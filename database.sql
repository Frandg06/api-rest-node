DROP TABLE IF EXISTS records;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS workouts;


CREATE TABLE IF NOT EXISTS workouts (
    id VARCHAR(55) PRIMARY KEY,
    name VARCHAR(255),
    mode VARCHAR(50),
);

CREATE TABLE IF NOT EXISTS members (
    id VARCHAR(55) PRIMARY KEY,
    name VARCHAR(255),
    gender VARCHAR(12),
    dateOfBirth DATE,
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS records (
    id VARCHAR(55) PRIMARY KEY,
    workout VARCHAR(55),
    record VARCHAR(255),
    FOREIGN KEY (workout) REFERENCES workouts(id) ON DELETE CASCADE
);


INSERT INTO workouts (id, name, mode) VALUES 
('61dbae02-c147-4e28-863c-db7bd402b2d6', 'Tommy V', 'For Time'),
('4a3d9aaa-608c-49a7-a004-66305ad4ab50', 'Dead Push-Ups', 'AMRAP 10'),
('d8be2362-7b68-4ea4-a1f6-03f8bc4eede7', 'Heavy DT', '5 Rounds For Time');

INSERT INTO members (id, name, gender, dateOfBirth, email, password) VALUES
('12a410bc-849f-4e7e-bfc8-4ef283ee4b19', 'Jason Miller', 'male', '1990-04-23', 'jason@mail.com', '666349420ec497c1dc890c45179d44fb13220239325172af02d1fb6635922956'),
('2b9130d4-47a7-4085-800e-0144f6a46059', 'Tiffany Brookston', 'female', '1996-06-09', 'tiffy@mail.com', '8a1ea5669b749354110dcba3fac5546c16e6d0f73a37f35a84f6b0d7b3c22fcc'),
('11817fb1-03a1-4b4a-8d27-854ac893cf41', 'Catrin Stevenson', 'female', '2001-04-02', 'catrin@mail.com', '18eb2d6c5373c94c6d5d707650d02c3c06f33fac557c9cfb8cb1ee625a649ff3');

INSERT INTO records (id, workout, record) VALUES
('ad75d475-ac57-44f4-a02a-8f6def58ff56', '4a3d9aaa-608c-49a7-a004-66305ad4ab50', '160 reps'),
('0bff586f-2017-4526-9e52-fe3ea46d55ab', 'd8be2362-7b68-4ea4-a1f6-03f8bc4eede7', '7:23 minutes'),
('365cc0bb-ba8f-41d3-bf82-83d041d38b82', '61dbae02-c147-4e28-863c-db7bd402b2d6', '358 reps');
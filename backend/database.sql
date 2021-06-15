CREATE DATABASE emailnotes;

CREATE TABLE user_credentials(
    email SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE notes(
    note_id SERIAL PRIMARY KEY,
    email VARCHAR(320) NOT NULL,
    note_content TEXT, 
    private_or_community BOOLEAN NOT NULL,
    -- date_time_created TIMESTAMP NOT NULL
);

CREATE TABLE email(
    note_id INT references notes(note_id),
    used_previously BOOLEAN NOT NULL,
    date_time_email_sent TIMESTAMP NOT NULL
);

ALTER TABLE notes 
ADD COLUMN note_title VARCHAR(320) NOT NULL, 
ADD COLUMN tag VARCHAR(255), 
ADD COLUMN no_of_times_emailed INT;

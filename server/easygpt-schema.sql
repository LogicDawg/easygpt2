
CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  username VARCHAR(25) NOT NULL
    REFERENCES users ON DELETE CASCADE
);

CREATE TABLE response (
  request_id INTEGER
    REFERENCES requests ON DELETE CASCADE,
  body TEXT,
  PRIMARY KEY (request_id)
);

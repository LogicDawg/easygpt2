
CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  username VARCHAR(25),
  password TEXT NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE requests (
  id SERIAL PRIMARY KEY,
  body TEXT NOT NULL
  userid INTEGER NOT NULL
    REFERENCES users ON DELETE CASCADE,
);

CREATE TABLE response (
  request_id INTEGER
    REFERENCES requests ON DELETE CASCADE,
  body TEXT,
  PRIMARY KEY (request_id)
);

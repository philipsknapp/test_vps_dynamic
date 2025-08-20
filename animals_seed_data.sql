CREATE DATABASE animals;

CREATE TABLE animals (
  id SERIAL PRIMARY KEY,
  name TEXT,
  species TEXT
);

INSERT INTO animals (name, species) VALUES
  ('Henning', 'Cat'),
  ('Rock', 'Dog'),
  ('Cleo', 'Rabbit'),
  ('Daniel', 'Tiger');
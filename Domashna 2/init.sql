CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    city VARCHAR(255),
    x_coordinate DOUBLE PRECISION NOT NULL,
    y_coordinate DOUBLE PRECISION NOT NULL,
    has_entrance_fee BOOLEAN,
    website VARCHAR(255),
    opening_hours VARCHAR(255),
    phone_number VARCHAR(255),
    type VARCHAR(255)
);

COPY places(name, city, x_coordinate, y_coordinate, has_entrance_fee, website, opening_hours, phone_number, type)
FROM '/docker-entrypoint-initdb.d/data.csv' DELIMITER ',' CSV HEADER;

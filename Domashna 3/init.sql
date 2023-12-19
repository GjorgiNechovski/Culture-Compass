CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       email VARCHAR(255),
                       username VARCHAR(255),
                       password VARCHAR(255),
                       role VARCHAR(255)
);
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
                        type VARCHAR(255),
                        image_url VARCHAR(255),
                        user_id INTEGER,
                        FOREIGN KEY (user_id) REFERENCES users(id)
);



CREATE TABLE reviews (
                         id SERIAL PRIMARY KEY,
                        comment VARCHAR(255),
						rating DOUBLE PRECISION,
                        place_id BIGINT,
                        user_id BIGINT,
                        FOREIGN KEY (place_id) REFERENCES places(id),
                        FOREIGN KEY (user_id) REFERENCES users(id)
);
COPY places(name, city, x_coordinate, y_coordinate, has_entrance_fee, website, opening_hours, phone_number, type,
            user_id, image_url)
FROM '/docker-entrypoint-initdb.d/data.csv' DELIMITER ',' CSV HEADER;

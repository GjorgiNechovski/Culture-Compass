# Use the official PostgreSQL image as the base
FROM postgres:latest

# Copy your initialization script into the image
COPY data.csv /docker-entrypoint-initdb.d/
COPY init.sql /docker-entrypoint-initdb.d/


# Set environmental variables for the PostgreSQL database (optional)
ENV POSTGRES_DB dians
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD root123

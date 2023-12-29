FROM mysql:8.0

# Set lower_case_table_names and other configurations

CMD ["mysqld", "--lower_case_table_names=1", "--default-authentication-plugin=mysql_native_password", "--sql_mode=NO_ENGINE_SUBSTITUTION"]

# exit mysqld 


# Copy SQL scripts to initialize the database
COPY ./updates/2023 /docker-entrypoint-initdb.d

# Set environment variables
ENV MYSQL_ROOT_PASSWORD="password"
ENV MYSQL_DATABASE="volunteers_db"

# Expose MySQL port
EXPOSE 3306

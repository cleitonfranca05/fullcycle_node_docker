FROM mysql:5.7

RUN usermod -u 1000 mysql

COPY ./db/ /docker-entrypoint-initdb.d/

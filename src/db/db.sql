create database firstapi;

create table users(
    id serial primary key,
    name varchar(40),
    email text
);

insert into users (name,email) values 
    ('Joe','joe@phoemx.co'),
    ('Ryan','Ryan@phoemx.co');
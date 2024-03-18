DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- auto increment generates a unique number for each new insert --
    name VARCHAR(30) NOT NULL
    -- varchar = a string up to the length of the variable --
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,

    FOREIGN KEY (department_id)
    -- key named department_id --
    REFERENCES department(id)
    -- the department_id key pulls from "id" in the department table --
);

CREATE TABLE employees ();
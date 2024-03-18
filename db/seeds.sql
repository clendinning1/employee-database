INSERT INTO department (id, name)
VALUES (INT PRIMARY KEY, VARCHAR(30))

INSERT INTO role (id, title, salary, department_id)
VALUES (INT PRIMARY KEY, VARCHAR(30), DECIMAL, INT)

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (INT PRIMARY KEY, VARCHAR(30), VARCHAR(30), INT, INT or null)
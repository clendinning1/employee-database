INSERT INTO department (id, name)
VALUES (001, "manufacturing"),
       (002, "customer service"),
       (003, "quality control")

INSERT INTO role (id, title, salary, department_id)
VALUES (0011, "line operator", 100.50, 001), (0012, "floor lead", 200.00, 001),
       (0021, "phone operator", 100.00, 002), (0022, "supervisor", 300.00, 002),
       (0031, "product inspector", 150.00, 003)

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (000001, "gerald", "richardson", 0011, 000005),
       (000002, "victoria", "watters", 0011, 000005), 
       (000003, "jonathan", "archer", 0011, 000005),
       (000004, "alejandro", "cortez", 0011, 000005),
       (000005, "val", "jones", 0012),
       (000006, "jessica", "bateman", 0021, 000008),
       (000007, "david", "smith", 0021, 000008),
       (000008, "edward", "elfman", 0022),
       (000009, "reggie", "dwight", 0031)
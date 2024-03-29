-- Creating Employee Demographics Table

CREATE TABLE employee_demographics(
EmployeeID INT,
FirstName VARCHAR(50),
LastName VARCHAR(50),
Age INT,
Gender VARCHAR(10)
);

-- Creating Employee Salary Table

CREATE TABLE employee_salary(
EmployeeID INT,
JobTitle VARCHAR(50),
Salary INT
);

-- Insert data into Employee Demographics table

INSERT INTO employee_demographics VALUES
(1001, 'Jim', 'Hobert', 30, 'Male');

-- Inserting multiple data into Employee Demographics table

INSERT INTO employee_demographics VALUES
(1002, 'Pam', 'Beasley', 29, 'Female'),
(1003, 'Dwight', 'Schrute', 27, 'Male'),
(1004, 'Angela', 'Martin', 31, 'Female'),
(1005, 'Tobey', 'Flenderson', 32, 'Male'),
(1006, 'Michael', 'Scott', 35, 'Male'),
(1007, 'Meredith', 'Palmer', 29, 'Female'),
(1008, 'Stanley', 'Hudson', 38, 'Male'),
(1009, 'Kevin', 'Malone', 31, 'Male');

-- Inserting data into Employee Salary table

INSERT INTO employee_salary VALUES
(1001, 'Salesman', 45000),
(1002, 'Receptionist', 36000),
(1003, 'Salesman', 63000),
(1004, 'Accountant', 47000),
(1005, 'HR', 50000),
(1006, 'Regoinal Manager', 65000),
(1007, 'Supplier Relations', 41000),
(1008, 'Salesman', 48000),
(1009, 'Accountant', 42000);

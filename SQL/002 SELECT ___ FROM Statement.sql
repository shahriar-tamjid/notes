/*
SELECT Statement
*, TOP, DISTINCT, COUNT, AS, MAX, MIN, AVG
*/

SELECT * FROM employee_demographics;

SELECT FirstName FROM employee_demographics;

SELECT FirstName, LastName FROM employee_demographics;

-- Select top 5 rows of every column
SELECT * FROM employee_demographics LIMIT 5;

-- Selecting all unique values
SELECT DISTINCT(EmployeeID)
FROM employee_demographics;

SELECT DISTINCT(Gender)
FROM employee_demographics;

-- COUNT gives us the number of values that exist in a column
SELECT COUNT(LastName)
FROM employee_demographics;

-- AS is used to rename the output column
SELECT COUNT(LastName) AS LastNameCount
FROM employee_demographics;

-- MAX is used to get the maximum value of a column
SELECT MAX(Salary) AS MaximumSalary
FROM employee_salary;

-- MIN is used to get the minimum value of a column
SELECT MIN(Salary) AS MinimumSalary
FROM employee_salary;

-- AVG is used to get the average value of an entire column
SELECT AVG(Salary) AS AverageSalary
FROM employee_salary;

-- Suppose we are in database X and we want to query to database Y then we need to specify the path of database Y
SELECT * FROM test_db.employee_demographics;

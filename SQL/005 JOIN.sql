/*
INNER JOIN, FULL JOIN, LEFT JOIN, RIGHT JOIN, OUTER JOIN
*/

SELECT *
FROM test_db.employee_demographics;

SELECT *
FROM test_db.employee_salary;

-- INNER JOIN
SELECT *
FROM test_db.employee_demographics
INNER JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID;

-- FULL OUTER JOIN
SELECT *
FROM test_db.employee_demographics
FULL OUTER JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID;

-- LEFT OUTER JOIN
SELECT *
FROM test_db.employee_demographics
LEFT OUTER JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID;

-- RIGHT OUTER JOIN
SELECT *
FROM test_db.employee_demographics
RIGHT OUTER JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID;

-- Selecting specific columns to display
SELECT employee_demographics.EmployeeID, FirstName, LastName, JobTitle, Salary
FROM test_db.employee_demographics
INNER JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID;

-- Find the highest paid employee except Michael
SELECT employee_salary.EmployeeID, FirstName, LastName, Salary
FROM test_db.employee_salary
INNER JOIN test_db.employee_demographics
ON employee_salary.EmployeeID = employee_demographics.EmployeeID
WHERE FirstName <> 'Michael'
ORDER BY Salary DESC;

-- Get the average salary for Salesman
SELECT JobTitle, AVG(Salary) AS 'AVG Salary'
FROM test_db.employee_salary
INNER JOIN test_db.employee_demographics
ON employee_salary.EmployeeID = employee_demographics.EmployeeID
WHERE JobTitle = 'Salesman'
GROUP BY JobTitle;

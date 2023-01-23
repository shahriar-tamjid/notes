/*
SELECT Statement
*, TOP, DISTINCT, COUNT, AS, MAX, MIN, AVG
*/

SELECT * FROM EmployeeDemographics

SELECT FirstName FROM EmployeeDemographics

SELECT FirstName, LastName FROM EmployeeDemographics

-- Select top 5 rows of every column
SELECT TOP 5 * FROM EmployeeDemographics

-- Selecting all unique values
SELECT DISTINCT(EmployeeID)
FROM EmployeeDemographics

SELECT DISTINCT(Gender)
FROM EmployeeDemographics

-- COUNT gives us the number of values that exist in a column
SELECT COUNT(LastName)
FROM EmployeeDemographics

-- AS is used to rename the output column
SELECT COUNT(LastName) AS LastNameCount
FROM EmployeeDemographics

-- MAX is used to get the maximum value of a column
SELECT MAX(Salary) AS MaximumSalary
FROM EmployeeSalary

-- MIN is used to get the minimum value of a column
SELECT MIN(Salary) AS MinimumSalary
FROM EmployeeSalary

-- AVG is used to get the average value of an entire column
SELECT AVG(Salary) AS AverageSalary
FROM EmployeeSalary

-- Suppose we are in database X and we want to query to database Y then we need to specify the path of database Y
SELECT * FROM [Practice DB].dbo.EmployeeDemographics

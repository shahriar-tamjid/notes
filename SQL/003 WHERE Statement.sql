/*
WHERE Statement
=, <>, <, >, AND, OR, LIKE, NULL, NOT NULL, IN
*/

-- Show everything except the person named "Jim" ........ <> means not equal to
SELECT *
FROM EmployeeDemographics
WHERE FirstName <> 'Jim'

-- Show details of everyone who are over the age of 30
SELECT *
FROM EmployeeDemographics
WHERE Age > 30

-- Show details of everyone who are or over the age of 30
SELECT *
FROM EmployeeDemographics
WHERE Age >= 30

-- Show all male employees who are or under the age of 32
SELECT *
FROM EmployeeDemographics
WHERE Age <= 32 AND Gender = 'Male'

-- Show employees who are male or employees who are under the age of 31
SELECT *
FROM EmployeeDemographics
WHERE Age < 31 OR Gender = 'Male'

-- Show all employees who has lastname starting with 'S' ......... '%' is called the wildcard
SELECT *
FROM EmployeeDemographics
WHERE LastName LIKE 'S%'

-- If we put '%' at the begining and end then we will get all the results that contain 'S' anywhere in the specified column
SELECT *
FROM EmployeeDemographics
WHERE LastName LIKE '%S%'

-- If we want to get names where 's' and 'e' both letter exist anywhere
SELECT *
FROM EmployeeDemographics
WHERE LastName LIKE '%s%e%'

-- NULL and NOT NULL
SELECT *
FROM EmployeeDemographics
WHERE FirstName IS NULL

SELECT *
FROM EmployeeDemographics
WHERE FirstName IS NOT NULL

-- IN is a condenced way to say equal to multiple data

-- If we use "="
SELECT *
FROM EmployeeDemographics
WHERE FirstName = 'Jim' OR FirstName = 'Michael' OR FirstName = 'Angela'

-- If we use "IN"
SELECT *
FROM EmployeeDemographics
WHERE FirstName IN ('Jim', 'Michael', 'Angela')

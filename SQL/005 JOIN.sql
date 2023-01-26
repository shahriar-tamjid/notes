/*
INNER JOIN, FULL JOIN, LEFT JOIN, RIGHT JOIN, OUTER JOIN
*/

SELECT * 
FROM [Practice DB].[dbo].[EmployeeDemographics]

SELECT * 
FROM [Practice DB].[dbo].[EmployeeSalary]

-- INNER JOIN
SELECT * 
FROM [Practice DB].[dbo].[EmployeeDemographics]
INNER JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID

-- FULL OUTER JOIN
SELECT * 
FROM [Practice DB].[dbo].[EmployeeDemographics]
FULL OUTER JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID

-- LEFT OUTER JOIN
SELECT * 
FROM [Practice DB].[dbo].[EmployeeDemographics]
LEFT OUTER JOIN [Practice DB].[dbo].[EmployeeSalary]
ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID

-- RIGHT OUTER JOIN
SELECT * 
FROM [Practice DB].[dbo].[EmployeeDemographics]
RIGHT OUTER JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID

-- Selecting specific columns to display
SELECT EmployeeDemographics.EmployeeID, FirstName, LastName, JobTitle, Salary 
FROM [Practice DB].[dbo].[EmployeeDemographics]
INNER JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID

-- Find the highest paid employee except Michael
SELECT EmployeeSalary.EmployeeID, FirstName, LastName, Salary 
FROM [Practice DB].[dbo].[EmployeeSalary]
INNER JOIN [Practice DB].[dbo].[EmployeeDemographics]
	ON EmployeeSalary.EmployeeID = EmployeeDemographics.EmployeeID
WHERE FirstName <> 'Michael'
ORDER BY Salary DESC

-- Get the average salary for Salesman
SELECT JobTitle, AVG(Salary) AS 'AVG Salary'
FROM [Practice DB].[dbo].[EmployeeSalary]
INNER JOIN [Practice DB].[dbo].[EmployeeDemographics]
	ON EmployeeSalary.EmployeeID = EmployeeDemographics.EmployeeID
WHERE JobTitle = 'Salesman'
GROUP BY JobTitle

-- Case Statement
-- It is the if-else version of SQL

SELECT FirstName, LastName, Age, 
CASE
	WHEN Age > 30 THEN 'Old'
	WHEN Age BETWEEN 27 AND 30 THEN 'Young'
	ELSE 'Baby'
END
FROM [Practice DB].[dbo].[EmployeeDemographics]
WHERE Age IS NOT NULL
ORDER BY Age

-- Give salary raise to employees according to their job title
SELECT FirstName, LastName, JobTitle, Salary,
CASE
	WHEN JobTitle = 'Salesman' THEN Salary + (Salary * 0.10) -- 10% salary raise to salesman
	WHEN JobTitle = 'Accountant' THEN Salary + (Salary * 0.05) -- 5% salary raise to accountant
	WHEN JobTitle = 'HR' THEN Salary + (Salary * 0.01) -- 1% salary raise to HR
	ELSE Salary + (Salary * 0.03) -- 3% salary raise to rest of the employees
END AS 'Salary After Raise'
FROM [Practice DB].[dbo].[EmployeeDemographics]
JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID

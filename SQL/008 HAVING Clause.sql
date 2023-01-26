-- HAVING clause

-- Find all jobs where are more than 1 employees
SELECT JobTitle, COUNT(JobTitle) AS 'Count'
FROM [Practice DB].[dbo].[EmployeeDemographics]
JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID
GROUP BY JobTitle
HAVING COUNT(JobTitle) > 1

-- Job titles that have AVG salaries over 45000
SELECT JobTitle, AVG(Salary) AS 'AVG Salary'
FROM [Practice DB].[dbo].[EmployeeDemographics]
JOIN [Practice DB].[dbo].[EmployeeSalary]
	ON EmployeeDemographics.EmployeeID = EmployeeSalary.EmployeeID
GROUP BY JobTitle
HAVING AVG(Salary) > 45000
ORDER BY AVG(Salary)


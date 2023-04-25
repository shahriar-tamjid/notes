-- HAVING clause

-- Find all jobs where are more than 1 employees
SELECT JobTitle, COUNT(JobTitle) AS 'Count'
FROM test_db.employee_demographics
JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID
GROUP BY JobTitle
HAVING COUNT(JobTitle) > 1;

-- Job titles that have AVG salaries over 45000
SELECT JobTitle, AVG(Salary) AS 'AVG Salary'
FROM test_db.employee_demographics
JOIN test_db.employee_salary
ON employee_demographics.EmployeeID = employee_salary.EmployeeID
GROUP BY JobTitle
HAVING AVG(Salary) > 45000
ORDER BY AVG(Salary);

-- Here we can't use the given name of the column inside any clasue. We must use the expression instead of the given name.
-- For example: We have to use "AVG(Salary)" or "COUNT(JobTitle)" inside HAVING clause. We cannot use their given names like: "Count" and "AVG Salary"

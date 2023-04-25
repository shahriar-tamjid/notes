/*
GROUP BY, ORDER BY
*/

-- DISTINCT shows us the unique value only. But GROUP BY shows us the unique value and as well as how many entries they have
SELECT Gender, COUNT(Gender)
FROM employee_demographics
GROUP BY Gender;

-- Counts gender of same age
SELECT Gender, Age, COUNT(Gender)
FROM employee_demographics
GROUP BY Gender, Age;

-- Group employees by gender who are elder than 31 years old
SELECT Gender, COUNT(Gender)
FROM employee_demographics
WHERE Age > 31
GROUP BY Gender;

-- ORDER BY is used to sort rows in ascending or descending order. i.e. default order is ascending. we need to specify the descending order
SELECT *
FROM employee_demographics
ORDER BY Age DESC;

-- ORDER BY Age descending and Gender descending
SELECT *
FROM employee_demographics
ORDER BY Age DESC, Gender DESC;

-- We don't need to write the column names. We can specify the column number.
-- Here "Age" is the 4th column. So if we want to sort according to Age column then we can just write "4" instead of "Age"
SELECT *
FROM employee_demographics
ORDER BY 4 DESC;

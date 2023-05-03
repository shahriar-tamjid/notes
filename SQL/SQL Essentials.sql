-- Execute (All or Selection) -> Ctrl + Shift + Enter.
-- Execute Current Statement -> Ctrl + Enter.

-- ========================== Basic Queries ============================

SHOW TABLES;

DESC sales;

SELECT * FROM sales;

-- A good practice is to first mention the table name in the FROM block and then come back to write the column names. So it will give us auto suggestions.

SELECT SaleDate, Amount, Customers
FROM sales;

-- ======================== Adding Calculated Columns in SELECT ==========================

-- Get SaleDate, Amount, Boxes, and Amount Per Boxes

SELECT SaleDate, Amount, Boxes, Amount/Boxes
FROM sales;

SELECT SaleDate, Amount, Boxes, Amount/Boxes AS 'Amount Per Box'
FROM sales;

-- ======================== WHERE means filtering in SQL =================================

SELECT SaleDate, Amount, Boxes
FROM sales
WHERE Amount > 10000;

-- ============================= ORDER BY means sorting in SQL ===========================

SELECT SaleDate, Amount, Boxes
FROM sales
WHERE Amount > 10000
ORDER BY Amount;

-- Sorting in descending order

SELECT SaleDate, Amount, Boxes
FROM sales
WHERE Amount > 10000
ORDER BY Amount DESC;

-- Get details of GID = "g1" then sort the PID in ascending order and Amount in descending order

SELECT *
FROM sales
WHERE GeoID='G1'
ORDER BY PID, Amount DESC;

-- Find all the sales where the Amount were more than 10000 and the year was 2022

-- Date Format in MySQL: YY-MM-DD

SELECT *
FROM sales
WHERE Amount > 10000 AND SaleDate >= '2022-01-01';

-- YEAR() is a built-in function in MySQL and it can be used to extract the year portion of any date type.

SELECT SaleDate, Amount
FROM sales
WHERE Amount > 10000 AND YEAR(SaleDate) = 2022
ORDER BY Amount DESC;

-- ============================ BETWEEN condition ===================================

SELECT *
FROM sales
WHERE Boxes > 0 AND Boxes <= 50;

-- BETWEEN function is inclusive. That means it always follows >= and <= format. 

SELECT *
FROM sales
WHERE Boxes BETWEEN 1 AND 50;

-- ================================== Working with Dates ===============================

-- WEEKDAY() is a built-in function of MySQL and it returns the number of day according to the date that has been passed.
-- Like if the date is equal to Monday then it will return 0, Friday will return 4, and Sunday will return 6.

SELECT SaleDate, Amount, Boxes, WEEKDAY(SaleDate) AS 'Day of Week'
FROM sales
WHERE WEEKDAY(SaleDate) = 4;

-- =========================== Using Multiple Tables ================================

SELECT *
FROM people
WHERE Team='Delish' OR Team='Jucies';

-- ============================== IN Clause =============================

SELECT *
FROM people
WHERE Team IN ('Delish', 'Jucies');

-- ========================= Pattern Matching or Wildcard ==============================
-- For this we use "%" and "LIKE" operator

-- Find Salesperson whose names start with 'B'
SELECT *
FROM people
WHERE Salesperson LIKE 'B%';

-- Find Salesperson where 'B' exist anywhere in the name
SELECT *
FROM people
WHERE Salesperson LIKE '%B%';

-- ========================= CASE Operator and Branching Logic ===========================
-- CASE is used to apply multiple conditions at once. It's like the Switch operator in C or Java

SELECT SaleDate, Amount,
		CASE 	WHEN Amount < 1000 THEN 'Under 1K'
				WHEN Amount < 5000 THEN 'Under 5K'
                WHEN Amount < 10000 THEN 'Under 10K'
			ELSE '10K or More'
		END 'Amount Category'
FROM sales;

-- =================================== JOINS =====================================
-- You don't need to explicitly write "AS". The MySQL engine detects it automatically.

SELECT s.SPID, s.SaleDate, p.Salesperson, s.Amount
FROM sales s
JOIN people p ON p.SPID = s.SPID;

-- ==================================== LEFT JOIN ==================================
-- Find the amount of the sold products

SELECT s.SaleDate, s.Amount, pr.Product
FROM sales s
LEFT JOIN products pr ON pr.PID = s.PID;

-- ================================ Multiple JOINS ==================================

-- We want to get the name of salesperson, name of product, name of the team, and the amount
-- We need to combine 3 tables for this and thus we need to perform 2 joins

SELECT s.SaleDate, p.Salesperson, p.Team, pr.Product, s.Amount
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = pr.PID;

-- ============================= Adding Conditions to JOINS ============================
-- Get the details of salesperson with team where less that 500 sales have been made

SELECT s.SaleDate, p.Salesperson, p.Team, pr.Product, s.Amount
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = pr.PID
WHERE s.Amount < 500;

-- Get the records under 500 for a specific team

SELECT s.SaleDate, p.Salesperson, p.Team, pr.Product, s.Amount
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = pr.PID
WHERE s.Amount < 500 AND p.Team = 'Delish';

-- Find records where people don't belong to any team

SELECT s.SaleDate, p.Salesperson, p.Team, pr.Product, s.Amount
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = pr.PID
WHERE s.Amount < 500 AND p.Team = '';

-- Find records where the salesperson are from India or New Zealand
-- They are in team 'Yummies' and have made sales more than 500 and less than 1000
-- Also sort them according to SaleDate
-- Here we need to join the "geo" table with the existing query

SELECT s.SaleDate, p.Salesperson, p.Team, pr.Product, s.Amount, g.Geo
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = pr.PID
JOIN geo g ON g.GeoID = s.GeoID
WHERE p.Team = 'Yummies'
		AND s.Amount > 500 AND s.Amount < 1000
        AND g.Geo IN ('India', 'New Zealand')
ORDER BY s.SaleDate;

-- ======================================= GROUP BY ===================================
-- We can create reports for different situations

SELECT GeoID, SUM(Amount), AVG(Amount), SUM(Boxes)
FROM sales
GROUP BY GeoID;

-- Show the names of the countries instead of GeoID

SELECT g.Geo, SUM(Amount), AVG(Amount), SUM(Boxes)
FROM sales s
JOIN geo g ON g.GeoID = s.GeoID
GROUP BY g.Geo;

-- Find the sales amount and number of boxes sold by each team and categorize them according to chocolate types

SELECT pr.Category, p.Team, SUM(Amount), SUM(Boxes)
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = s.PID
GROUP BY pr.Category, p.Team
ORDER BY pr.Category, p.Team;

-- Also exclude the blank teams
-- WHERE needs to be before the GROUP BY and ORDER BY

SELECT pr.Category, p.Team, SUM(Amount), SUM(Boxes)
FROM sales s
JOIN people p ON p.SPID = s.SPID
JOIN products pr ON pr.PID = s.PID
WHERE p.Team <> ''
GROUP BY pr.Category, p.Team
ORDER BY pr.Category, p.Team;

-- Find the total amount sold by each product

SELECT pr.Product, SUM(s.Amount) AS `Total Amount`
FROM sales s
JOIN products pr ON pr.PID = s.PID
GROUP BY pr.Product
ORDER BY `Total Amount` DESC;

-- Find total amounts by top 10 products

SELECT pr.Product, SUM(s.Amount) AS `Total Amount`
FROM sales s
JOIN products pr ON pr.PID = s.PID
GROUP BY pr.Product
ORDER BY `Total Amount` DESC
LIMIT 10;

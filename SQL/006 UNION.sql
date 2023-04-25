-- UNION (avoids duplicates)
SELECT *
FROM test_db.employee_demographics
UNION
SELECT *
FROM test_db.warehouse_employee_demographics;

-- UNION ALL (includes duplicates)
SELECT *
FROM test_db.employee_demographics
UNION ALL
SELECT *
FROM test_db.warehouse_employee_demographics;

-- UNION works well when both of the table have same or similar columns

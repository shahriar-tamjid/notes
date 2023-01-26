-- UNION (avoids duplicates)
SELECT *
FROM [Practice DB].[dbo].[EmployeeDemographics]
UNION
SELECT *
FROM [Practice DB].[dbo].[WareHouseEmployeeDemographics]

-- UNION ALL (includes duplicates)
SELECT *
FROM [Practice DB].[dbo].[EmployeeDemographics]
UNION ALL
SELECT *
FROM [Practice DB].[dbo].[WareHouseEmployeeDemographics]

-- UNION works well when both of the table have same or similar columns

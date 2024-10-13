/
*
This is Incorrect query please find the issue in this query and fix it.
SELECT department_id, salary FROM Employees ORDER BY salary DESC LIMIT 3;

Fetch the Top 3 Highest Salaries for Each Department.
*/


WITH TopSalaries AS (
    SELECT department_id, salary,
           ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank
    FROM Employees
)
SELECT department_id, salary
FROM TopSalaries
WHERE rank <= 3
ORDER BY department_id, salary DESC;

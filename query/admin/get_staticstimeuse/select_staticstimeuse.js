const selectstaticstimeuse =`
SELECT HOUR(wud_reg_date) AS time_hour, COUNT(wud_reg_date) AS time_use 
FROM wash_use_data
WHERE 1 = 1
AND wud_reg_date BETWEEN CONCAT(LEFT(CURDATE(),10), ' 00:00:01') AND CONCAT(LEFT(CURDATE(),10), ' 23:59:59')
GROUP BY HOUR(wud_reg_date)
ORDER BY HOUR(wud_reg_date) ASC
`

module.exports = selectstaticstimeuse;
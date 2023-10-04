const selectstaticstimesale =`
SELECT HOUR(wpd_pay_date) AS time_hour, IFNULL(SUM(wpd_pay_fee),0) AS time_amount 
FROM wash_pay_data
WHERE 1 = 1
AND wpd_auth_type = 'PAT001'
AND wpd_pay_date BETWEEN CONCAT(LEFT(CURDATE(),10), ' 00:00:01') AND CONCAT(LEFT(CURDATE(),10), ' 23:59:59')
GROUP BY HOUR(wpd_pay_date)
ORDER BY HOUR(wpd_pay_date) ASC
`

module.exports = selectstaticstimesale;
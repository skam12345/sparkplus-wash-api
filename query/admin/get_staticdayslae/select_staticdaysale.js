const selectstaticsdaysale =`
SELECT DATE_FORMAT(wpd_pay_date, "%Y-%m-%d") AS day_date, IFNULL(SUM(wpd_pay_fee),0) AS day_amount 
FROM wash_pay_data 
WHERE 1=1 
	AND wpd_auth_type = 'PAT001'
	AND LEFT(DATE_FORMAT(wpd_pay_date, "%Y-%m-%d"),7) = LEFT(CURDATE(),7) 
GROUP BY DATE_FORMAT(wpd_pay_date, "%Y-%m-%d")
ORDER BY DATE_FORMAT(wpd_pay_date, "%Y-%m-%d") ASC
`

module.exports = selectstaticsdaysale;
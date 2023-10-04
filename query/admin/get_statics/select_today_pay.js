const selecttodaypay = `
SELECT IFNULL(SUM(wpd_pay_fee),0) as today_pay_amount, count(wpd_pay_fee) as today_pay_count 
FROM wash_pay_data 
WHERE 1=1 
	AND wpd_auth_type = 'PAT001'	
	AND DATE_FORMAT(wpd_pay_date, "%Y-%m-%d") = CURDATE() 
`

module.exports = selecttodaypay;
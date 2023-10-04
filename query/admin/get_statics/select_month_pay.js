const selectmonthpay = `
SELECT IFNULL(SUM(wpd_pay_fee),0) as month_pay_amount, count(wpd_pay_fee) as month_pay_count 
FROM wash_pay_data 
WHERE 1=1 
	AND wpd_auth_type = 'PAT001'
	AND LEFT(DATE_FORMAT(wpd_pay_date, "%Y-%m-%d"),7) = LEFT(CURDATE(),7)
`

module.exports = selectmonthpay;
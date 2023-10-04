const selecttodayuse = `
SELECT IFNULL(SUM(wud_pay_fee),0) as today_use_amount, count(wud_pay_fee) as today_use_count 
FROM wash_use_data 
WHERE 1=1 
	AND DATE_FORMAT(wud_reg_date, "%Y-%m-%d") = CURDATE() 
`
module.exports = selecttodayuse;
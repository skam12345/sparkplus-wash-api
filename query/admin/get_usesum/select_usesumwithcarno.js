const selectusesumwithcarno = (start_date, end_date, use_type, car_no)=>`
SELECT IFNULL(SUM(a.wud_pay_fee),0) as amount_fee, COUNT(a.wud_pay_fee) as account_fee  
FROM wash_use_data a LEFT JOIN code_info b ON a.wud_use_type = b.cin_code
WHERE 1=1 
	AND LEFT(a.wud_reg_date,10) >= "${start_date}" AND LEFT(a.wud_reg_date,10) <= "${end_date}" 
	AND b.cin_code LIKE "${use_type}%"
	AND a.wud_car_no LIKE "%${car_no}%"
`

module.exports = selectusesumwithcarno;
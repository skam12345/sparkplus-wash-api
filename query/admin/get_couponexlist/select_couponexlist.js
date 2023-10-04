const selectcouponexlist = (start_date, end_date, car_no) =>`
SELECT a.cin_coupon_code as coupon_no, SUBSTRING_INDEX(a.cin_couppon_name, ':', -1) as coupon_name,
	b.cin_code_name as coupon_type, LEFT(a.cin_reg_date, 10) as reg_date,
	a.cin_is_publish as is_publish, a.cin_car_no as car_no
FROM coupon_info a LEFT JOIN code_info b ON a.cin_coupon_type = b.cin_code
WHERE 1=1 
	AND LEFT(a.cin_reg_date,10) >= "${start_date}" AND LEFT(a.cin_reg_date,10) <= "${end_date}" 
	AND a.cin_coupon_type = 'CCT004'
	AND a.cin_is_use = 'Y'
	AND a.cin_is_publish = 'N'	
	AND a.cin_car_no LIKE "%${car_no}%"
    ORDER BY a.cin_reg_date DESC 
`

module.exports = selectcouponexlist;
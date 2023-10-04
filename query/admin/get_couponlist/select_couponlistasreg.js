const selectcouponlistasreg = (start_date, end_date, coupon_type, is_use, publish_type, car_no, start_count, view_count) =>`
SELECT a.cin_coupon_code as coupon_no, SUBSTRING_INDEX(a.cin_couppon_name, ':', -1) as coupon_name,
b.cin_code_name as coupon_type, a.cin_is_use as is_use,
a.cin_car_no as car_no, a.cin_dc_percent as dc_percent,
a.cin_dc_fee as dc_fee, LEFT(a.cin_reg_date, 10) as reg_date,
LEFT(a.cin_use_date, 10) as use_date, c.cin_code_name as publish_type 
FROM coupon_info a LEFT JOIN code_info b ON a.cin_coupon_type = b.cin_code
LEFT JOIN code_info c ON a.cin_publish_type = c.cin_code
WHERE 1=1 
AND LEFT(a.cin_reg_date,10) >= "${start_date}" AND LEFT(a.cin_reg_date,10) <= "${end_date}"
AND a.cin_coupon_type LIKE "${coupon_type}%"
AND a.cin_is_use LIKE "${is_use}%"
AND a.cin_publish_type LIKE "${publish_type}%"
AND a.cin_car_no LIKE "%${car_no}%"
ORDER BY a.cin_reg_date DESC, a.cin_use_date DESC
LIMIT ${start_count}, ${view_count}
`

module.exports = selectcouponlistasreg;
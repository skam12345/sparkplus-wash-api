const selectcouponsumasreg = (start_date, end_date, coupon_type, is_use, publish_type, car_no) =>`
SELECT COUNT(a.cin_coupon_code) as account_coupon  
FROM coupon_info a LEFT JOIN code_info b ON a.cin_coupon_type = b.cin_code
LEFT JOIN code_info c ON a.cin_publish_type = c.cin_code
WHERE 1=1 
AND LEFT(a.cin_reg_date,10) >= "${start_date}" AND LEFT(a.cin_reg_date,10) <= "${end_date}"
AND a.cin_coupon_type LIKE "${coupon_type}%"
AND a.cin_is_use LIKE "${is_use}%"
AND a.cin_publish_type LIKE "${publish_type}%"
AND a.cin_car_no LIKE "%${car_no}%"
`

module.exports = selectcouponsumasreg;
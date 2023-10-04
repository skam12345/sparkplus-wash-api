const selectcouponinfo = (coupon_no) =>`
SELECT cin_couppon_name as coupon_name, cin_car_no as car_no,
   cin_plc_code as plc_code 
FROM coupon_info 
WHERE cin_coupon_code = "${coupon_no}"
`

module.exports = selectcouponinfo;
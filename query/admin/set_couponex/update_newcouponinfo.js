const updatenewcouponinfo = (coupon_name, car_no, plc_code, coupon_no01) =>`
UPDATE coupon_info SET
cin_is_use = 'Y',
cin_is_publish = 'Y',
cin_publish_date = NOW(),
cin_reg_date = NOW(),
cin_couppon_name = "${coupon_name}",
cin_car_no = "${car_no}",
cin_plc_code = "${plc_code}"   
WHERE cin_coupon_code = "${coupon_no01}"
`

module.exports = updatenewcouponinfo;
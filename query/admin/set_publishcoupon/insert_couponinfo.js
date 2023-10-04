const insertcouponinfo = (coupon_code, coupon_name, prod_name , coupon_type, dc_fee, dc_percent, end_date, 
    rest_count, plc_code)  =>`
	INSERT INTO coupon_info
		(cin_coupon_code, cin_couppon_name, cin_coupon_type, cin_dc_fee, 
		cin_dc_percent, cin_is_use, cin_reg_date, cin_use_date, 
		cin_expire_date, mun_mem_no, cin_rest_count, cin_car_no, 
		cin_plc_code, wpd_seq_no, cin_publish_type)
	values
	("${coupon_code}", CONCAT("${coupon_name}",':',"${prod_name}"), "${coupon_type}", "${dc_fee}", 
	"${dc_percent}", 'Y', NOW(), '1900-01-01', 
	"${end_date}", '', "${rest_count}",'', 
    "${plc_code}", 0, 'CPT003')
`

module.exports = insertcouponinfo;
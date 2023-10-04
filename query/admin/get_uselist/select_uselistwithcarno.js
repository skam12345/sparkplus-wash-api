const selectuselistwithcarno = (start_date, end_date, use_type, car_no)=>`

SELECT a.wud_car_no as car_no, b.cin_code_name as use_name, a.wud_reg_date as use_date,
	 (CASE WHEN a.pin_seq_no = 0 THEN 'Y' ELSE 'N' END) as qr_is,
	 a.wud_first_menu as prod_name, a.wud_second_menu as option_name,
	 a.wud_third_menu as brush_is, a.wud_pay_fee as pay_fee, 
	 a.wud_plc_code as plc_code, a.wud_seq_no as seq_no 
FROM wash_use_data a LEFT JOIN code_info b ON a.wud_use_type = b.cin_code
WHERE 1=1 
	AND LEFT(a.wud_reg_date,10) >= "${start_date}" AND LEFT(a.wud_reg_date,10) <= "${end_date}" 
	AND b.cin_code LIKE "${use_type}%"
	AND a.wud_car_no LIKE "%${car_no}%"
    ORDER BY a.wud_reg_date DESC 
`

module.exports = selectuselistwithcarno;
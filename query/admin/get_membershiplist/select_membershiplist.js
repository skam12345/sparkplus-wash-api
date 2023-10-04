const selectmembershiplist = (start_date, end_date, reg_type, use_status, car_no) =>`
SELECT a.mpd_car_no as car_no, a.mun_mem_no as mem_no, d.pin_prod_name as prod_name,
	a.mpd_brush_yn as is_brush, c.cin_code_name as use_status, a.mpd_pay_fee as pay_fee,
	a.mpd_pay_day as pay_day, b.cin_code_name as terminal_name, LEFT(a.mpd_start_date,10) as pay_date,
	a.mpd_seq_no as seq_no, LEFT(a.mpd_end_date,10) as use_end_date, a.mpd_tel_no as phone_no 
FROM membership_pay_data a LEFT JOIN code_info b ON a.mpd_reg_type = b.cin_code 
	LEFT JOIN code_info c ON a.mpd_use_status = c.cin_code 
	LEFT JOIN product_info d ON a.pin_seq_no = d.pin_seq_no 
WHERE 1=1 
	AND LEFT(a.mpd_start_date,10) >= "${start_date}" AND LEFT(a.mpd_start_date,10) <= "${end_date}" 
	AND b.cin_code LIKE "${reg_type}%"
	AND c.cin_code LIKE "${use_status}%"
	AND a.mpd_car_no LIKE "%${car_no}%"
ORDER BY a.mpd_start_date DESC 
`

module.exports = selectmembershiplist;
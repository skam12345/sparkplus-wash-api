const selectpaylistwithcarno = (start_date, end_date, 
    terminal_type, auth_type, buy_type, car_no) =>`
SELECT b.pan_trno as trno, c.cin_code_name as terminal_name, 
	a.wpd_pay_date as pay_date, d.cin_code_name as auth_name, 
	e.cin_code_name as buy_name, a.wpd_first_menu as prod_name,
	a.wpd_wash_fee as wash_fee, a.wpd_option_fee as option_fee,
	a.wpd_dc_fee as dc_fee, a.wpd_pay_fee as pay_fee,
	f.cin_code_name as pay_name, b.pan_auth_no as auth_no, 
	b.pan_token as token, b.pan_trd_date as trd_date, a.wpd_seq_no as seq_no,
	a.wpd_car_no as car_no
FROM wash_pay_data a LEFT JOIN payment_approval b ON a.wpd_seq_no = b.wpd_seq_no
	LEFT JOIN code_info c ON a.wpd_terminal_type = c.cin_code 
	LEFT JOIN code_info d ON a.wpd_auth_type = d.cin_code 
	LEFT JOIN code_info e ON a.wpd_buy_type = e.cin_code 
	LEFT JOIN code_info f ON a.wpd_pay_type = f.cin_code 
where 1=1
AND LEFT(a.wpd_pay_date,10) >= "${start_date}" AND LEFT(a.wpd_pay_date,10) <= "${end_date}"  
AND c.cin_code LIKE "${terminal_type}%"
AND d.cin_code LIKE "${auth_type}%"
AND e.cin_code LIKE "${buy_type}%"
	AND a.wpd_car_no LIKE "%${car_no}%"
ORDER BY a.wpd_pay_date DESC
`

module.exports = selectpaylistwithcarno;
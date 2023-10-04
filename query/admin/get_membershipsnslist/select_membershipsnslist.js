const selectmembershipsnslist = (search_date) =>`
SELECT a.mpd_car_no as car_no, a.mun_mem_no as mem_no, d.pin_prod_name as prod_name,
	a.mpd_brush_yn as is_brush, c.cin_code_name as use_status, d.pin_prod_fee as pay_fee,
	a.mpd_pay_day as pay_day, b.cin_code_name as terminal_name, LEFT(a.mpd_start_date,10) as pay_date,
	a.mpd_token as token_membership, a.pin_seq_no as prod_code, d.pin_plc_code as plc_code, a.mpd_tel_no as phone_no    
FROM membership_pay_data a LEFT JOIN code_info b ON a.mpd_reg_type = b.cin_code 
	LEFT JOIN code_info c ON a.mpd_use_status = c.cin_code 
	LEFT JOIN product_info d ON a.pin_seq_no = d.pin_seq_no 
	LEFT JOIN payment_approval e ON a.wpd_seq_no = e.wpd_seq_no 
WHERE 1 = 1 
	AND a.mpd_use_status = 'MUS001'
	AND 
		CASE LEFT(LAST_DAY("${search_date}"), 10)
			WHEN LEFT("${search_date}",10) THEN a.mpd_pay_day >= DATE_FORMAT("${search_date}", '%d')
			ELSE a.mpd_pay_day = DATE_FORMAT("${search_date}", '%d')
		END
	AND DATE_FORMAT(a.mpd_start_date, '%Y-%m') = DATE_FORMAT(DATE_SUB("${search_date}", INTERVAL 1 month),'%Y-%m')
ORDER BY a.mpd_start_date DESC
`

module.exports = selectmembershipsnslist;
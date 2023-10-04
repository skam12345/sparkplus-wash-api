const selectmembshipdetail = (seq_no) =>`
SELECT a.mun_mem_no as mem_no, a.mpd_car_no as car_no, b.pin_prod_name as prod_name,
	a.mpd_use_status as use_status, a.mpd_brush_yn as is_brush, a.mpd_pay_fee as pay_fee,
	a.mpd_pay_day as pay_day, LEFT(a.mpd_start_date, 10) as pay_date,
	a.mpd_tel_no as phone_no, LEFT(a.mpd_end_date, 10) as end_date 
FROM membership_pay_data a LEFT JOIN product_info b ON a.pin_seq_no = b.pin_seq_no 
WHERE 1=1 
	AND a.mpd_seq_no = "${seq_no}"
`

module.exports = selectmembshipdetail;
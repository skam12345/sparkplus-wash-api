const payinsertmempay = (mun_mem_no, prod_code, car_no, pay_day, reg_type, start_date, end_date, is_brush, token, pay_fee, phone_no, wpd_seq_no) =>`
INSERT INTO membership_pay_data
	(mpd_seq_no, mun_mem_no, pin_seq_no, mpd_car_no, 
	mpd_use_status, mpd_pay_day, mpd_card_no, mpd_expiration_mm, 
	mpd_expiration_yy, mpd_cvc_no, mpd_password_no, mpd_reg_type, 
	mpd_start_date, mpd_end_date, mpd_brush_yn, 
	mpd_token, mpd_pay_fee , mpd_tel_no, wpd_seq_no)

SELECT IFNULL(MAX(mpd_seq_no),0)+1, "${mun_mem_no}",  "${prod_code}",  "${car_no}",
	'MUS001',  "${pay_day}", '', '', 
	'', '', '', "${reg_type}", 
	"${start_date}",LEFT(DATE_ADD("${start_date}", INTERVAL 1 MONTH), 10) , "${is_brush}", 
	"${token}", "${pay_fee}", "${phone_no}", "${wpd_seq_no}"
FROM membership_pay_data
`

module.exports = payinsertmempay;
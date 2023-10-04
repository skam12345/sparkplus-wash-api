const payinsertpaydata = (mun_mem_no, car_no, wud_fleet_no, use_type, prod_code, prod_name,
    option_code, option_name, is_brush, wash_fee, dc_fee, option_fee, pay_fee, plc_code,
	pay_type, terminal_type) =>`
INSERT INTO wash_pay_data
	(wpd_seq_no, wpd_buy_type, wpd_car_no, mun_mem_no, wpd_fleet_no,
		wpd_use_status, pin_seq_no, wpd_first_menu, pin2_seq_no, 
		wpd_second_menu, wpd_third_menu, wpd_wash_fee, wpd_dc_fee, 
		wpd_option_fee, wpd_pay_fee,  wpd_plc_code,  wpd_pay_type, wpd_terminal_type, 
		wpd_pay_date) 
SELECT IFNULL(MAX(wpd_seq_no),0)+1, "${use_type}",  "${car_no}", "${mun_mem_no}",
	"${wud_fleet_no}",'WUS001' ,"${prod_code}","${prod_name}","${option_code}",
	"${option_name}","${is_brush}","${wash_fee}" ,"${dc_fee}" ,
	"${option_fee}", "${pay_fee}",  "${plc_code}","${pay_type}", "${terminal_type}", now()
FROM wash_pay_data
`
module.exports = payinsertpaydata;
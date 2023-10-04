const selectcarlist = `
SELECT a.wcn_car_no as car_no, b.wud_first_menu as prod_name, b.wud_second_menu as option_name,
	 b.wud_third_menu as is_brush, b.wud_seq_no as use_seq, a.wcn_seq_no as wash_seq 
FROM wash_control a LEFT JOIN wash_use_data b ON a.wud_seq_no = b. wud_seq_no 
ORDER BY a.wcn_order_no ASC
`
module.exports = selectcarlist;
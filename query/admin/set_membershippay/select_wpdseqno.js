const selectwpdseqno = (car_no) =>`
SELECT wpd_seq_no FROM wash_pay_data 
WHERE 1=1
	AND wpd_car_no = "${car_no}"
ORDER BY wpd_seq_no DESC LIMIT 1
`
module.exports = selectwpdseqno;
const selectwpdseqno = (carno) =>`
SELECT wpd_seq_no FROM wash_pay_data 
WHERE 1=1
	AND wpd_car_no = "${carno}"
	ORDER BY wpd_seq_no desc limit 1
`

module.exports = selectwpdseqno;
const updatepaydatacancel = (seq_no) =>`
UPDATE wash_pay_data set 
	wpd_auth_type = 'PAT002'		
WHERE wpd_seq_no = "${seq_no}"
`

module.exports = updatepaydatacancel;
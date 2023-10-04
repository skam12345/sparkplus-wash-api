const updateapprovalcancel = (seq_no) =>`
UPDATE payment_approval set 
	pan_auth_type = 'PAT002',	
	pan_cacel_date = NOW()
WHERE wpd_seq_no = "${seq_no}"
`

module.exports = updateapprovalcancel;
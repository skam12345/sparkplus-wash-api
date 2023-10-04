const insertpaymentapp = (wpd_seq_no, tr_no, trd_date, trd_time, pay_fee, car_no, auth_no, token) =>`
INSERT INTO payment_approval
	(pan_seq_no, wpd_seq_no, pan_auth_type, pan_auth_yn, 
	pan_trno, pan_trd_date, pan_trd_tm, pan_amt, 
	pan_msg1, pan_auth_no, pan_reg_date, pan_token)
SELECT IFNULL(MAX(pan_seq_no),0)+1, "${wpd_seq_no}", 'PAT001', 'Y',
    "${tr_no}", "${trd_date}", "${trd_time}", "${pay_fee}",
    "${car_no}", "${auth_no}", now(), "${token}"
FROM payment_approval
`

module.exports = insertpaymentapp;
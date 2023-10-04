const updatemembership = (use_status, is_brush, seq_no, phone_no) =>`
UPDATE membership_pay_data SET 
	mpd_use_status 	= "${use_status}",
	mpd_brush_yn	= "${is_brush}",
	mpd_tel_no = "${phone_no}"
WHERE mpd_seq_no	= "${seq_no}"
`
module.exports = updatemembership;
const updatenotice = (admin_id, title, contents, seq_no) =>`
UPDATE notice_board SET 
	nbn_title 		= "${title}",
	nbn_contents	= "${contents}",
	nbn_write_admin	= "${admin_id}",
	nbn_write_date	= NOW() 
WHERE nbn_seq_no	= "${seq_no}"
`

module.exports = updatenotice;
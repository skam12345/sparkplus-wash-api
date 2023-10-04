const selectnoticedetail = (seq_no) =>`
SELECT nbn_write_admin as admin_id, nbn_title as title, nbn_contents as contents,
	LEFT(nbn_write_date, 10) as write_date 
FROM notice_board 
WHERE 1=1 
	AND nbn_seq_no = "${seq_no}"
`
module.exports = selectnoticedetail;
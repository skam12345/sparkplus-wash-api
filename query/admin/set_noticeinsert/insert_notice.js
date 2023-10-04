const insertnotice = (title, contents, admin_id)  =>`
INSERT INTO notice_board(nbn_seq_no, nbn_title, nbn_contents, nbn_order_no , nbn_write_admin, nbn_write_date)
SELECT IFNULL(MAX(nbn_seq_no),0)+1, "${title}", "${contents}",
	0, "${admin_id}", NOW() 
FROM notice_board 
`
module.exports = insertnotice;
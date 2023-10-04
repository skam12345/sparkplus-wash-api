const selectnoticelist =(title, contents)=>`
SELECT nbn_title as notice_title, nbn_contents as notice_contents,
	nbn_write_admin as write_admin, LEFT(nbn_write_date,10) as write_date,
	nbn_seq_no as seq_no  
FROM notice_board 
WHERE 1=1 
	AND nbn_title LIKE "%${title}%"
	AND nbn_contents LIKE "%${contents}%"
ORDER BY nbn_write_date DESC 
`

module.exports = selectnoticelist;
const selectnoticesum = (title, contents) =>`
SELECT COUNT(nbn_seq_no) as account_seq  
FROM notice_board 
WHERE 1=1 
	AND nbn_title LIKE "%${title}%"
	AND nbn_contents LIKE "%${contents}%"
`

module.exports = selectnoticesum;
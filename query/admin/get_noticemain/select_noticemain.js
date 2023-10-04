const selectnoticemain = (list_count) =>`
SELECT nbn_title as title, nbn_write_date as write_date, nbn_seq_no as seq_no 
FROM notice_board 
WHERE 1=1 
ORDER BY nbn_order_no ASC, nbn_write_date DESC LIMIT ${list_count}
`

module.exports = selectnoticemain;
const deletenotice = (seq_no) =>`
DELETE FROM notice_board WHERE nbn_seq_no= "${seq_no}"
`

module.exports = deletenotice;
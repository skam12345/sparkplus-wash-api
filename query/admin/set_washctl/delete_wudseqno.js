const deletewudseqno = (wud_seq_no) =>`
DELETE FROM wash_use_data WHERE wud_seq_no = "${wud_seq_no}"
`

module.exports = deletewudseqno;
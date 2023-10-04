const deletewashseq = (wash_seq) =>`
DELETE FROM wash_control WHERE wcn_seq_no = "${wash_seq}"
`
module.exports = deletewashseq;
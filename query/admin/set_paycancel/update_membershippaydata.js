const updatemembershippaydata = (seq_no) =>`
UPDATE membership_pay_data SET 
   mpd_use_status = 'MUS002'
WHERE wpd_seq_no = "${seq_no}"
`

module.exports = updatemembershippaydata;
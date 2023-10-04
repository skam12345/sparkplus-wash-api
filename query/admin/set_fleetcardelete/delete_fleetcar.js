const deletefleetcar = (seq_no) =>`
DELETE FROM fleet_car_info 
WHERE fci_seq_no = "${seq_no}"
`

module.exports = deletefleetcar;
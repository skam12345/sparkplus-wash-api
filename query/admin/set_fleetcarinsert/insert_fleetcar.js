const insertfleetcar = (fleet_no, car_no) =>`
INSERT INTO fleet_car_info(fci_seq_no, mun_mem_no, fci_car_no, fci_is_use,
	fci_car_type, fci_reg_date, fci_update_date)
SELECT IFNULL(MAX(fci_seq_no),0)+1, "${fleet_no}", "${car_no}", 'Y',
	'FCT001', NOW(), NOW()  
FROM fleet_car_info
`

module.exports = insertfleetcar;
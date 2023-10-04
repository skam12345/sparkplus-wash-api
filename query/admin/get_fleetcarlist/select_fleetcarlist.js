const selectfleetcarlist = (fleet_no) =>`
SELECT fci_car_no as car_no, LEFT(fci_reg_date,10) as reg_date, fci_seq_no as seq_no  
FROM fleet_car_info 
WHERE 1 = 1 
	AND mun_mem_no = "${fleet_no}"
ORDER BY fci_car_no ASC
`

module.exports = selectfleetcarlist;
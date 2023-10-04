const payelectfleet = (carno)=>`
SELECT b.mun_mem_no AS wud_fleet_no 
FROM fleet_car_info a LEFT JOIN mem_user b ON a.mun_mem_no = b.mun_mem_no
WHERE 1=1
	AND b.mun_mem_type <> 'MMT001' 
	AND b.mun_status = 'MMS001'	
	AND a.fci_car_no = "${carno}"
ORDER BY b.mun_mem_no DESC LIMIT 1
`

module.exports = payelectfleet;
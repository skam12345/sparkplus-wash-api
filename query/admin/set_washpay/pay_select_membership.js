const payselectMembership = (carno)=>`
SELECT mun_mem_no FROM mem_user 
WHERE 1=1
	AND mun_mem_type = 'MMT001'	
	AND mun_status = 'MMS001'	
	AND mun_car_no = "${carno}"
ORDER BY mun_mem_no DESC LIMIT 1`

module.exports = payselectMembership;
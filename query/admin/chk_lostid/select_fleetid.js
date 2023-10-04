const selectfleetid = (phone_no) =>`
SELECT COUNT(*) as id_count  
FROM mem_user 
WHERE 1 = 1
	AND mun_status = 'MMS001'
	AND mun_tel = "${phone_no}" 	 
	AND mun_mem_type <> 'MMT001'	
`

module.exports = selectfleetid;
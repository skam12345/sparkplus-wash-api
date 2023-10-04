const selectmatchfleetid = (phone_no) =>`
SELECT 'Y' as return_code, mun_id as mem_id, mun_mem_no as mem_no 
FROM mem_user
WHERE 1 = 1
    AND mun_status = 'MMS001'
    AND mun_tel = "${phone_no}"
    AND mun_mem_type <> 'MMT001'	 	
`

module.exports = selectmatchfleetid;
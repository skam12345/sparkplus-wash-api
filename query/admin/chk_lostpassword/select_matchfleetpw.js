const selectmatchfleetpw = (phone_no) =>`
SELECT 'Y' as return_code, CAST(CAST(rand()*100000 as UNSIGNED) as char) as temp_pwd, mun_mem_no as mem_no 
FROM mem_user 
WHERE 1 = 1
    AND mun_status = 'MMS001'
    AND mun_id = "${mem_id}"
    AND mun_tel = "${phone_no}"
    AND mun_mem_type <> 'MMT001'		 	
`

module.exports = selectmatchfleetpw;
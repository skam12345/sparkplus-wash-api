const selectmemsum = (start_date, end_date, mem_type, mem_status, car_no, mem_id, mem_tel) =>`
SELECT COUNT(a.mun_mem_no) as account_seq  
FROM mem_user a LEFT JOIN code_info b ON a.mun_mem_type = b.cin_code 
	LEFT JOIN code_info c ON a.mun_status = c.cin_code 
WHERE 1=1 
    AND LEFT(a.mun_reg_date,10) >= "${start_date}" AND LEFT(a.mun_reg_date,10) <= "${end_date}" 
    AND b.cin_code LIKE "${mem_type}%"
    AND c.cin_code LIKE "${mem_status}%"
    AND a.mun_car_no LIKE "%${car_no}%"
    AND a.mun_id LIKE "${mem_id}%"
    AND a.mun_tel LIKE "${mem_tel}%"
`
module.exports = selectmemsum;
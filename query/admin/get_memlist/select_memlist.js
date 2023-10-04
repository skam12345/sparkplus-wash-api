const selectmemlist = (start_date, end_date, mem_type, mem_status, car_no, mem_id, mem_tel) =>`
SELECT a.mun_mem_no as mem_no, a.mun_id as mem_id, a.mun_name as mem_name,
	c.cin_code_name as mem_status, b.cin_code_name as mem_type, a.mun_tel as mem_tel,
	a.mun_dc_percent as fleet_dc, a.mun_prepay_count as fleet_prepay,
	LEFT(a.mun_reg_date, 10) as reg_date, a.mun_mem_no as seq_no 
FROM mem_user a LEFT JOIN code_info b ON a.mun_mem_type = b.cin_code 
	LEFT JOIN code_info c ON a.mun_status = c.cin_code 
WHERE 1=1 
	AND LEFT(a.mun_reg_date,10) >= "${start_date}" AND LEFT(a.mun_reg_date,10) <= "${end_date}" 
	AND b.cin_code LIKE "${mem_type}%"
	AND c.cin_code LIKE "${mem_status}%"
	AND a.mun_car_no LIKE "%${car_no}%"
	AND a.mun_id LIKE "${mem_id}%"
	AND a.mun_tel LIKE "${mem_tel}%"
ORDER BY a.mun_reg_date DESC 
`
module.exports = selectmemlist;






const selectmemdetail = (seq_no) =>`
SELECT mun_mem_no as mem_no, mun_id as mem_id, mun_name as mem_name,
	mun_status as mem_status, mun_mem_type as mem_type, mun_tel as mem_tel,
	mun_email as mem_email, mun_com_num as com_no,
	mun_dc_percent as fleet_dc, mun_prepay_count as fleet_prepay, mun_prepay_use as fleet_prepay_use,
	LEFT(mun_reg_date, 10) as reg_date 
FROM mem_user 
WHERE 1=1 
	AND mun_mem_no = "${seq_no}"
`

module.exports = selectmemdetail;
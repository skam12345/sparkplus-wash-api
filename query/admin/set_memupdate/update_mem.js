const updatemem  = (mem_type, mem_status, mem_name, mem_tel, mem_email ,com_no, fleet_dc, fleet_prepay, fleet_prepay_use, seq_no) =>`
UPDATE mem_user SET 
	mun_mem_type 	= "${mem_type}",
	mun_status		= "${mem_status}",
	mun_name		= "${mem_name}",
	mun_tel			= "${mem_tel}",
	mun_email		= "${mem_email}",
	mun_com_num		= "${com_no}",
	mun_dc_percent	= "${fleet_dc}",
	mun_prepay_count	= "${fleet_prepay}",
	mun_prepay_use	= "${fleet_prepay_use}",
	mun_update_date	= NOW() 
WHERE mun_mem_no	= "${seq_no}"
`

module.exports = updatemem;
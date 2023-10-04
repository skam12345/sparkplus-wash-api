const updateadmin = (admin_pwd, admin_name, admin_status, admin_tel, seq_no) =>`
UPDATE admin_info SET 
	ain_pwd			= "${admin_pwd}",
	ain_admin_name	= "${admin_name}",
	ain_admin_status	= "${admin_status}",
	ain_admin_tel	= "${admin_tel}",
	ain_reg_date	= NOW() 
WHERE ain_admin_id	= "${seq_no}"
`
module.exports = updateadmin;
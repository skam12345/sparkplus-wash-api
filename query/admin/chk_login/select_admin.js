const selectadmin = (admin_id, admin_pwd) =>`
SELECT COUNT(ain_admin_id) as login_count  
FROM admin_info 
WHERE 1 = 1
AND ain_admin_status = 'AAS001'	
	AND ain_admin_id = "${admin_id}"
	AND ain_admin_pwd = "${admin_pwd}"
`

module.exports = selectadmin;
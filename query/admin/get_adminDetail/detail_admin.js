const detailadmin = (seq_no) =>`
SELECT ain_admin_id as admin_id, ain_pwd as admin_pwd, ain_admin_name as admin_name, ain_admin_status as admin_status,ain_admin_tel as admin_tel,
	LEFT(ain_reg_date, 10) as reg_date 
FROM admin_info 
WHERE 1=1 
	AND ain_admin_id = "${seq_no}"
`
module.exports = detailadmin;
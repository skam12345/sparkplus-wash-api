const selectadminlist = (admin_name) =>`
SELECT ain_admin_id as admin_id, ain_admin_name as admin_name, ain_admin_tel as admin_tel,
	LEFT(ain_reg_date,10) as reg_date, ain_admin_id as seq_no  
FROM admin_info 
WHERE 1=1 
	AND ain_admin_name LIKE "%${admin_name}%"
ORDER BY ain_reg_date DESC 
`
module.exports = selectadminlist;
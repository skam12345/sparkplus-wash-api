const sumadmin = (admin_name) =>`
SELECT COUNT(ain_admin_id) as account_seq  
FROM admin_info 
WHERE 1=1 
	AND ain_admin_name LIKE "%${admin_name}%"
`
module.exports = sumadmin;
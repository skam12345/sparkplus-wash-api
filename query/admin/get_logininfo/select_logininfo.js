const selectlogininfo = (admin_id) =>`
SELECT ain_admin_id as admin_id, ain_admin_name as admin_name   
FROM admin_info 
WHERE 1 = 1
AND ain_admin_id = "${admin_id}"		
`

module.exports = selectlogininfo;
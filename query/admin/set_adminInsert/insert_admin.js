const insertadmin = (ain_admin_id, ain_pwd, ain_admin_name, ain_admin_status, ain_admin_tel) =>`
INSERT INTO admin_info(ain_admin_id, ain_pwd, ain_admin_name, ain_admin_status, ain_admin_tel, ain_reg_date)
VALUES("${ain_admin_id}", "${ain_pwd}", "${ain_admin_name}", "${ain_admin_status}", "${ain_admin_tel}", NOW()) 
`
module.exports = insertadmin;
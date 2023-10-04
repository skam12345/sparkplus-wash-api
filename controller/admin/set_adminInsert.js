const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const insertadmin = require('../../query/admin/set_adminInsert/insert_admin');

module.exports.setadmininsert = (req, res) =>{
    var ain_admin_id = req.body.admin_id;
    var ain_pwd = req.body.admin_pwd;
    var ain_admin_name = req.body.admin_name;
    var ain_admin_status = req.body.admin_status;
    var ain_admin_tel = req.body.admin_tel;
    
    connection.query(insertadmin(ain_admin_id, ain_pwd, ain_admin_name, ain_admin_status, ain_admin_tel),
    (error, rows) =>{
        if (error) throw error;
        if (rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    }) 
    connection.end;

}
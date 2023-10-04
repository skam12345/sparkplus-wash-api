const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updateadmin = require('../../query/admin/set_adminUpdate/update_admin');

module.exports.setadminupdate = (req, res) =>{
    var admin_pwd = req.body.admin_pwd;
    var admin_name = req.body.admin_name;
    var admin_status = req.body.admin_status;
    var admin_tel = req.body.admin_tel;
    var seq_no = req.body.seq_no;
    
    connection.query(updateadmin(admin_pwd, admin_name, admin_status, admin_tel, seq_no),
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
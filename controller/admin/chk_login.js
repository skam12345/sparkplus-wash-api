const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectadmin = require('../../query/admin/chk_login/select_admin');

module.exports.chklogin = (req, res) =>{
    let admin_id = req.body.admin_id;
    let admin_pwd = req.body.admin_pwd;
    console.log(req.body.admin_id);
    console.log(req.body.admin_pwd);

    connection.query(selectadmin(admin_id, admin_pwd), (error, rows) =>{
        if (error) throw error;
        console.log(rows[0].login_count);
        if(rows[0].login_count == 0){
            res.send('{"result_code" : "N"}')
        }else{
            res.send('{"result_code" : "Y"}')
        }
    })
    connection.end;
}
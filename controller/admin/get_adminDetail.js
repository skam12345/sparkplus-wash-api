const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const detailadmin = require('../../query/admin/get_adminDetail/detail_admin');

module.exports.getadmindetail = (req, res) =>{
    var seq_no = req.body.seq_no;
    
    connection.query(detailadmin(seq_no),
    (error, rows) =>{
        if (error) throw error;
        res.send('{"admin_id" : "'+rows[0].admin_id+'" , "admin_pwd" : "'+rows[0].admin_pwd+
        '", "admin_name" : "'+rows[0].admin_name+'", "admin_status" : "'+rows[0].admin_status+'", "admin_tel" : "'+rows[0].admin_tel+'" }')
    }) 
    connection.end;

}
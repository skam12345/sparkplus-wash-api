const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updatemembership = require('../../query/admin/set_membershipupdate/update_membership');

module.exports.setmembershipupdate = (req, res) =>{
    let use_status = req.body.use_status;
    let is_brush = req.body.is_brush;
    let seq_no = req.body.seq_no;
    let phone_no = req.body.phone_no;

    connection.query(updatemembership(use_status, is_brush, seq_no, phone_no),
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
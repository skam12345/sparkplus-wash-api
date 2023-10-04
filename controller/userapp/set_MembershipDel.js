const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const setmembershipdel = require('../../query/userapp/set_membershipDel/update_membership_del');

module.exports.setmembershipdel = (req, res) =>{
    let mem_no = req.body.mem_no;
    connection.query(setmembershipdel(mem_no), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}
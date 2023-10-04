const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const deletenotice = require('../../query/admin/set_noticedelete/delete_notice');
const connection = mysql2.createConnection(dbconfig);


module.exports.setnoticedelete = (req, res) =>{
    let seq_no = req.body.seq_no;

    connection.query(deletenotice(seq_no), (error, rows) =>{
        if (error) throw error;
        if (rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
}
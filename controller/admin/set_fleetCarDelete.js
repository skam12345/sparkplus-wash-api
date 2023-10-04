const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const deletefleetcar = require('../../query/admin/set_fleetcardelete/delete_fleetcar');

module.exports.setfleetcardelete = (req, res) =>{
    let seq_no = req.body.seq_no;
    connection.query(deletefleetcar(seq_no), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}');
        }     
    })
    connection.end;
};
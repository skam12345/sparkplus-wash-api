const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const setmemdel = require('../../query/userapp/set_memDel/update_mem_del');

module.exports.setmemdel = (req, res) =>{
    let mem_no = req.body.mem_no;
    connection.query(setmemdel(mem_no), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}
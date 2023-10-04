const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemdetail = require('../../query/userapp/set_memPwd/update_mem_pwd');

module.exports.setmempwd = (req, res) =>{
    let mem_no = req.body.mem_no;
    let mem_pwd = req.body.mem_pwd;
    connection.query(selectmemdetail(mem_no, mem_pwd), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}
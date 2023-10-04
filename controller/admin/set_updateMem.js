const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updatemem = require('../../query/admin/set_memupdate/update_mem');

module.exports.setupdatemem = (req, res) =>{
    var mem_type = req.body.mem_type;
    var mem_status = req.body.mem_status;
    var mem_name = req.body.mem_name;
    var mem_tel = req.body.mem_tel;
    var mem_email = req.body.mem_email;
    var com_no = req.body.com_no;
    var fleet_dc = req.body.fleet_dc;
    var fleet_prepay = req.body.fleet_prepay;
    var fleet_prepay_use = req.body.fleet_prepay_use;
    var seq_no = req.body.seq_no;
    
    connection.query(updatemem(mem_type, mem_status, mem_name, mem_tel, mem_email ,com_no, fleet_dc, fleet_prepay, fleet_prepay_use, seq_no),
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
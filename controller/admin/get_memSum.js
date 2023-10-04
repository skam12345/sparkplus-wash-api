const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemsum = require('../../query/admin/get_memsum/select_memsum');

module.exports.getmemsum = (req, res) =>{
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var mem_type = req.body.mem_type;
    var mem_status = req.body.mem_status;
    var car_no = req.body.car_no;
    var mem_id = req.body.mem_id;
    var mem_tel = req.body.mem_tel;

    connection.query(selectmemsum(start_date, end_date, mem_type, mem_status, car_no, mem_id, mem_tel), (error, rows)=>{
        if (error) throw error;
        if(rows.length >0 ){
            res.send('{"account_seq" : "'+rows[0].account_seq+'"}')
        }else{
            res.send('{"account_seq" : "0"}')
        }
    })
    connection.end;
}



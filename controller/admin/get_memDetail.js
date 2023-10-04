const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemdetail = require('../../query/admin/get_memdetail/select_memdetail');

module.exports.getmemdetail = (req, res) =>{
    var seq_no = req.body.seq_no;
    console.log(11111111111111, seq_no);
    connection.query(selectmemdetail(seq_no), (error, rows) =>{
        if (error) throw error;
        res.send('{"mem_no" : "'+rows[0].mem_no+'" , "mem_id" : "'+rows[0].mem_id+
        '", "mem_type" : "'+rows[0].mem_type+'", "mem_status" : "'+rows[0].mem_status+
        '", "mem_name" : "'+rows[0].mem_name+'", "mem_tel" : "'+rows[0].mem_tel+'", "mem_email" : "'+rows[0].mem_email+
        '", "com_no" : "'+rows[0].com_no+'", "fleet_dc" : "'+ rows[0].fleet_dc +'", "fleet_prepay" : "'+ rows[0].fleet_prepay +
        '", "fleet_prepay_use" : "'+rows[0].fleet_prepay_use+'", "reg_date" : "'+ rows[0].reg_date +'" }')
    })
    connection.end;
}

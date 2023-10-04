const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpromotiondetail = require('../../query/admin/get_promotiondetail/select_promotiondetail')

module.exports.getpromotiondetail = (req, res) =>{
    let seq_no = req.body.seq_no;

    connection.query(selectpromotiondetail(seq_no), (error, rows) =>{
        if (error) throw error;
        if(rows.length >0){
            res.send('{"prom_title" : "'+rows[0].prom_title+'" , "start_date" : "'+rows[0].start_date+
        '", "end_date" : "'+rows[0].end_date+'", "is_use" : "'+rows[0].is_use+
        '", "prom_type" : "'+rows[0].prom_type+'", "prom_contents" : "'+rows[0].prom_contents+'" }')
        }
    })
}
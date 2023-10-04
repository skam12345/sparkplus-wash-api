const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updatepromotioninfo = require('../../query/admin/set_promotionupdate/update_promotioninfo')

module.exports.setpromotionupdate = (req, res) =>{
    let prom_title = req.body.prom_title;
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let is_use = req.body.is_use;
    let prom_type = req.body.prom_type;
    let prom_contents = req.body.prom_contents;
    let seq_no = req.body.seq_no;

    connection.query(updatepromotioninfo(prom_title, start_date, end_date, is_use, prom_type, prom_contents, seq_no), (error, rows) =>{
            if (error) throw error;
            if (rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}')
            }else{
                res.send('{"result_code" : "N"}')
            }
    })
}
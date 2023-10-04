const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updatenotice = require('../../query/admin/set_noticeupdate/update_notice');


module.exports.setupdatenotice = (req, res) =>{
    let admin_id = req.body.admin_id;
    let title = req.body.title;
    let contents = req.body.contents;
    let seq_no = req.body.seq_no;

    connection.query(updatenotice(admin_id, title, contents, seq_no), (error, rows) =>{
        if (error) throw error;
        if (rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    
}
const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const insertnotice = require('../../query/admin/set_noticeinsert/insert_notice');
const connection = mysql2.createConnection(dbconfig);

module.exports.setnoticeinsert = (req, res) =>{
    let title = req.body.title;
    let contents = req.body.contents;
    let admin_id = req.body.admin_id

    connection.query(insertnotice(title, contents, admin_id), (error, rows) =>{
        if (error) throw error;
        if (rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
}


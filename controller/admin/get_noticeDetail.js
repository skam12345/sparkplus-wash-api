const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);
const selectnoticedetail = require('../../query/admin/get_noticedetail/select_noticedetail');

module.exports.getnoticedetail = (req, res) =>{
    let seq_no = req.body.seq_no;

    connection.query(selectnoticedetail(seq_no), (error, rows) =>{
        if (error) throw error;
        res.send('{"admin_id" : "'+rows[0].admin_id+'" , "title" : "'+rows[0].title+
        '", "contents" : "'+rows[0].contents.split("\n")+'", "write_date" : "'+rows[0].write_date+'" }')
    })
    connection.end;
}

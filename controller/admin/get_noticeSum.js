const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const selectnoticesum = require('../../query/admin/get_noticesum/select_noticesum');
const connection = mysql2.createConnection(dbconfig);

module.exports.getnoticesum = (req, res) =>{
    let title = req.body.title;
    let contents = req.body.contents;

    connection.query(selectnoticesum(title,contents), (error, rows) =>{
        if (error) throw error;
        if(rows.length >0 ){
            res.send('{"account_seq" : "'+rows[0].account_seq+'"}')
        }else{
            res.send('{"account_seq" : "0"}')
        }
    })
    connection.end;
}
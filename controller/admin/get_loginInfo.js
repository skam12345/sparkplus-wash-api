const mysql2     = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectlogininfo = require('../../query/admin/get_logininfo/select_logininfo')

module.exports.getlogininfo = (req, res) =>{
    let admin_id = req.body.admin_id;
    connection.query(selectlogininfo(admin_id), (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            res.send('{"admin_id" : "'+ rows[0].admin_id +'", "admin_name" : "'+ rows[0].admin_name +'"}')
        }else{
            res.send('존재하지 않는 아이디입니다');
        }
    })
    connection.end;
}
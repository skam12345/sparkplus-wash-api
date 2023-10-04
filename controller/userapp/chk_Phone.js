const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectphone = require('../../query/userapp/chk_phone/select_phone');

module.exports.chkcarno = (req, res) =>{
    console.log(req.body.phone_no);
    let phone_no = req.body.phone_no;
    connection.query(selectphone(phone_no), (error, rows) =>{
        if (error) throw error;
        if(rows[0].phone_count == 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}
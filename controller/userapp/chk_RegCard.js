const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcardinfo = require('../../query/userapp/chk_regcard/selct_cardinfo')

module.exports.chkregcard = (req, res) =>{
    let mem_no = req.body.mem_no;
    connection.query(selectcardinfo(mem_no), (error, rows) =>{
        if (error) throw error;
        if(rows[0].card_count == 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
    connection.end;

}
const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectregcardinfo = require('../../query/userapp/get_regcard/select_regcardinfo');

module.exports.getregcard = (req,res) =>{
    let mem_no = req.body.mem_no;

    connection.query(selectregcardinfo(mem_no), (error, rows)=>{
        if (error) throw error;
        res.send('{"card_no" : "'+ rows[0].card_no +'", "exp_mm" : "'+rows[0].exp_mm +'", "exp_yy" : "'+rows[0].exp_yy +
        '", "cvc_no" : "'+rows[0].cvc_no +'", "password_no" : "'+ rows[0].password_no+'", "owner" : "'+ rows[0].owner+
        '", "token" : "'+rows[0].token +'"}')
    })
    connection.end;

}
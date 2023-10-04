const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updatepayinfo = require('../../query/userapp/set_updatecard/update_payinfo');

module.exports.setupdatecard = (req, res) =>{
    let card_no = req.body.card_no;
    let exp_mm = req.body.exp_mm;
    let exp_yy = req.body.exp_yy;
    let cvc_no = req.body.cvc_no;
    let password_no = req.body.password_no;
    let owner = req.body.owner;
    let mem_no = req.body.mem_no;
    let token = req.body.token;

    connection.query(updatepayinfo(card_no, exp_mm, exp_yy,cvc_no, password_no, owner, mem_no, token), (error, rows) =>{
        if (error) throw error;
        if(rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }   
    })
    connection.end;

}
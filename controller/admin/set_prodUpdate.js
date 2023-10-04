const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updateproductinfo = require('../../query/admin/set_produpdate/update_productinfo');

module.exports.setprodupdate = (req, res) =>{
    let prod_name = req.body.prod_name;
    let prod_fee = req.body.prod_fee;
    let is_use = req.body.is_use;
    let dc_fee = req.body.dc_fee;
    let seq_no = req.body.seq_no;

    if(dc_fee == undefined){
        dc_fee = '';
    }
    
    connection.query(updateproductinfo(prod_name, prod_fee, is_use, dc_fee, seq_no), (error, rows) =>{
        if (error) throw error;
        if (rows.affectedRows > 0){
            res.send('{"result_code" : "Y"}')
        }else{
            res.send('{"result_code" : "N"}')
        }
    })
}
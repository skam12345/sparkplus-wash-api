const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectproddetail = require('../../query/admin/get_proddetail/select_proddetail');

module.exports.getproddetail = (req, res) =>{
    let seq_no = req.body.seq_no;

    connection.query(selectproddetail(seq_no), (error, rows) =>{
        if (error) throw error;
        res.send('{"prod_name" : "'+ rows[0].prod_name +'", "prod_type" : "'+ rows[0].prod_type +'", "prod_fee" : "'+ rows[0].prod_fee +
        '", "is_use" : "'+ rows[0].is_use +'", "dc_fee" : "'+ rows[0].dc_fee +'", "reg_date" : "'+ rows[0].reg_date +'"}')
    })
}
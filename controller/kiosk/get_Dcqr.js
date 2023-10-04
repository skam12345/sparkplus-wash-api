const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectqrcode = require('../../query/get_dcqr/select_qrcode');

module.exports.getdcqr = (req, res) =>{
    let qr_no = req.body.qr_no;
    connection.query(selectqrcode(qr_no), (error, rows) =>{
        if (error) throw error;
        res.send('{ "dc_fee" : "'+rows[0].dc_fee+'", "dc_percent" : "'+rows[0].dc_percent+'"}');
    })
};
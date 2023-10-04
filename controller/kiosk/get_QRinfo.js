const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcouponinfor = require('../../query/get_qrinfo/select_couponinfo');

module.exports.getqrinfo = (req, res) =>{
    let qr_no = req.body.qr_no;
    connection.query(selectcouponinfor(qr_no), (error, rows) =>{
        if (error) throw error;
        res.send('{"coupon_type" : "'+rows[0].coupon_type +'", "rest_count" : "'+ rows[0].rest_count
        +'", "plc_code" : "'+ rows[0].plc_code +'"}');
    })

}
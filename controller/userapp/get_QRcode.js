const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const qrCode = require('qrcode');
const getqrcode = require('../../query/userapp/get_qrCode/select_qr_code');

module.exports.getqrcode = (req, res) =>{
    let code = req.body.code
    let cin_is_use = 'Y'
    connection.query(getqrcode(code, cin_is_use), (error, rows) =>{
        if (error) throw error;
        if (rows[0]?.cin_coupon_code) {
            qrCode.toDataURL(code, {
                errorCorrectionLevel:'H'
            }, (err, url) => {
                // const data = url.replace(/.*,/, '')
                // const img = Buffer.from(data, 'base64')
                // res.set({'Content-Type': 'image/png'});
                // res.writeHead(200, { 'Content-Type': 'image/png' })
                // res.end(img)
                res.send(url);
            })
        } else {
            res.send('N')
        }
    })
    connection.end;

}
const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updatecouponinfo = require('../../query/userapp/set_couponuse/update_couponinfo');

module.exports.setcouponuse = (req,res) =>{
    let coupon_code = req.body.coupon_code;
    connection.query(updatecouponinfo(coupon_code), (error, rows) =>{
        if(rows.affectedRows > 0){
           res.send('{"result_code" : "Y"}');
        }else{
            res.send('{"result_code" : "N"}')
        }     
    })
    connection.end;

}
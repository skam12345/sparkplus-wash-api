const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcouponsumasreg = require('../../query/admin/get_couponsum/select_couponsumasreg');
const selectcouponsumasuse = require('../../query/admin/get_couponsum/select_couponsumasuse')

module.exports.getcouponsum = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let coupon_type = req.body.coupon_type;
    let is_use = req.body.is_use;
    let publish_type = req.body.publish_type;
    let car_no = req.body.car_no;
    let date_type = req.body.date_type;;

    if(date_type == 'reg'){
        connection.query(selectcouponsumasreg(start_date, end_date, coupon_type, is_use, publish_type, car_no), (error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
               res.send('{"account_coupon" : "'+rows[0].account_coupon+'"}');
            }
            else{
                res.send('{"account_coupon" : "0"}');
            }
        })
    }else if(date_type == 'use'){
        connection.query(selectcouponsumasuse(start_date, end_date, coupon_type, is_use, publish_type, car_no), (error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
                res.send('{"account_coupon" : "'+rows[0].account_coupon+'"}');
             }
             else{
                 res.send('{"account_coupon" : "0"}');
             }
        })
    }else{
        res.send('{"account_coupon" : "0"}');
    }
}   
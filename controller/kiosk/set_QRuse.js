const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const updategiftcouponcount1 = require('../../query/set_qruse/update_giftcouponcount1');
const updategiftcouponcountupto1 = require('../../query/set_qruse/update_giftcouponcountupto1');
const updatecouponuse = require('../../query/set_qruse/update_couponuse');

module.exports.setqruse = (req, res) =>{
    let qr_no = req.body.qr_no;
    let coupon_type = req.body.coupon_type;
    let car_no = req.body.car_no;
    let rest_count = req.body.rest_count;
    if(coupon_type = 'CCT004'){
        if(rest_count > 1 && rest_count != 0){
            connection.query(updategiftcouponcountupto1(car_no, qr_no), (error, rows) =>{
                if (error) throw error;
                if(rows.affectedRows > 0){
                    res.send('{"result_code" : "Y"}');
                }else{
                    res.send('{"result_code" : "N"}');
                }   
            })
        }else{
            connection.query(updategiftcouponcount1(car_no, qr_no), (error, rows) =>{
                if (error) throw error;
                if(rows.affectedRows > 0){
                    res.send('{"result_code" : "Y"}');
                }else{
                    res.send('{"result_code" : "N"}');
                }   
            })
        }
    }else{
        connection.query(updatecouponuse(car_no, qr_no), (error, rows) =>{
            if (error) throw error;
            if(rows.affectedRows > 0){
                res.send('{"result_code" : "Y"}');
            }else{
                res.send('{"result_code" : "N"}');
            }     
        })
    }
}
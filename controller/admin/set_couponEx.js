const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const deleteexcouponinfo = require('../../query/admin/set_couponex/delete_excouponinfo');
const updatenewcouponinfo = require('../../query/admin/set_couponex/update_newcouponinfo');
const selectcouponinfo = require('../../query/admin/set_couponex/select_couponinfo');

module.exports.setcouponex = (req, res) =>{
    let coupon_no = req.body.coupon_no;
    let coupon_no01 = req.body.coupon_no01;
    
    var coupon_name;
    var car_no ;
    var plc_code;

    connection.query(selectcouponinfo(coupon_no), (error, rows) =>{
        if (error) throw error;
        coupon_name = rows[0].coupon_name;
        car_no = rows[0].car_no;
        plc_code = rows[0].plc_code;
        if(rows.length > 0){
            connection.query(updatenewcouponinfo(coupon_name, car_no, plc_code, coupon_no01), (error, rows) =>{
                if (error) throw error;
                if(rows.affectedRows > 0){
                    connection.query(deleteexcouponinfo(coupon_no), (error, rows) =>{
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{ "result_code" : "Y"}')
                        }else{
                            res.send('{ "result_code" : "N"}')
                        }
                    })
                }else{
                    res.send('{ "result_code" : "N"}')
                }
            })
        }else{
            res.send('{ "result_code" : "N"}')
        }   
    })
    connection.end;

}
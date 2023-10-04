const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcounponcount = require('../../query/admin/set_couponuse/select_couponcount');
const updatecouponinfo = require('../../query/admin/set_couponuse/update_couponinfo');

module.exports.setcouponuse = (req, res) =>{    
    let coupon_code = req.body.coupon_code;
    let coupon_type = req.body.coupon_type;
    
    connection.query(selectcounponcount(coupon_code, coupon_type), (error, rows) =>{
        if (error) throw error;
        if(rows[0].coupon_count == 1){
            connection.query(updatecouponinfo(coupon_code), (error, rows) =>{
                if (error) throw error;
                if (rows.affectedRows > 0){
                    res.send('{"result_code" : "Y"}')
                }else{
                    res.send('{"result_code" : "N"}')
                }
            })
        }else{
            res.send('{"result_code" : "N"}')
        }
    })

    connection.end;
}
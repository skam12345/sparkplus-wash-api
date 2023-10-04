const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcouponcount = require('../../query/userapp/set_couponreg/select_couponcount');
const updatecouponinfo = require('../../query/userapp/set_couponreg/update_couponinfo');

module.exports.setcouponreg = (req, res) =>{
    let mem_no = req.body.mem_no;
    let coupon_no = req.body.coupon_no;

    connection.query(selectcouponcount(coupon_no), (error, rows) =>{
        if (error) throw error;
        if(rows[0].coupon_count  == 0){
            res.send('{"result_code" : "N"}')
        }else{
            connection.query(updatecouponinfo(mem_no, coupon_no) , (error, rows) =>{
                if (error) throw error;
                if(rows.affectedRows > 0){
                    console.log('{"result_code" : "Y"}');
                }else{
                    console.log('{"result_code" : "N"}')
                }   
            })

        }
    })
    connection.end;

}
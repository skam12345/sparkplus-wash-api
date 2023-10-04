const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const createcouponno = require('../../query/get_couponno/create_couponno');
const selectcouponname = require('../../query/get_couponno/select_couponname');
const selectmemno = require('../../query/get_couponno/select_memno');
const insertcouponinfo = require('../../query/get_couponno/insert_couponinfo');

module.exports.getcouponno = (req, res) =>{
    var coupon_code = '';
    let coupon_type = req.body.coupon_type;
    let prod_name = req.body.prod_name;
    var coupon_name = '';
    var car_no = req.body.car_no;
    var mem_no = '';
    let dc_fee = req.body.dc_fee;
    let dc_percent = req.body.dc_percent;
    let rest_count = req.body.rest_count;
    let plc_code = req.body.plc_code;
    let is_member = req.body.is_member;
    connection.query(createcouponno, (error, rows) =>{
        if (error) throw error;
        coupon_code = rows[0].coupon_code;
        connection.query(selectcouponname(coupon_type), (error, rows) => {
            if (error) throw error;
            coupon_name = rows[0].coupon_name;
            if(is_member == 'Y'){
                connection.query(selectmemno(car_no), (error, rows) =>{
                    if (error) throw error;
                    mem_no = rows[0].mem_no;
                    connection.query(insertcouponinfo(coupon_code, coupon_name,prod_name,  coupon_type , dc_fee , dc_percent,
                        mem_no, rest_count, car_no, plc_code), (error, rows) => {
                        if (error) throw error;
                            if(rows.affectedRows > 0){
                                res.send('{ "coupon_code" : "' + coupon_code +'"}')
                            }else{
                                res.send('쿠폰발행 실패');
                            }
                    })
                })
            }else{
                connection.query(selectmemno(car_no), (error, rows) =>{
                    if (error) throw error;
                    mem_no = 'N';
                    connection.query(insertcouponinfo(coupon_code, coupon_name,prod_name,  coupon_type , dc_fee , dc_percent,
                        mem_no, rest_count, car_no, plc_code), (error, rows) => {
                        if (error) throw error;
                            if(rows.affectedRows > 0){
                                res.send('{ "coupon_code" : "' + coupon_code +'"}')
                            }else{
                                res.send('쿠폰발행 실패');
                            }
                    })
                })

            }
           

        })
    })
};
const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const createcouponno = require('../../query/admin/set_publishcoupon/create_couponcode');
const selectcouponname = require('../../query/admin/set_publishcoupon/select_couponname');
const insertcouponinfo = require('../../query/admin/set_publishcoupon/insert_couponinfo');
const insertcouponinfoasgift = require('../../query/admin/set_publishcoupon/insert_couponinfoasgift')

module.exports.setpublishcoupon = (req, res) =>{
    var coupon_code = '';
    let coupon_type = req.body.coupon_type;
    let prod_name = req.body.prod_name;
    var coupon_name = '';
    let dc_fee = req.body.dc_fee;
    let dc_percent = req.body.dc_percent;
    let end_date = req.body.end_date;
    // let rest_count = req.body.rest_count;
    let rest_count = 1;
    let plc_code = req.body.plc_code;
    if(prod_name == undefined){
        prod_name ='';
    }
    if(plc_code == undefined){
        plc_code ='';
    }
    if(coupon_type == 'CCT004'){
        connection.query(createcouponno(coupon_type), (error, rows) =>{
            if (error) throw error;
            coupon_code = rows[0].coupon_code;
            connection.query(selectcouponname(coupon_type), (error, rows) => {
                if (error) throw error;
                coupon_name = rows[0].coupon_name;
                        connection.query(insertcouponinfoasgift(coupon_code, coupon_name, prod_name , coupon_type, dc_fee, dc_percent, end_date, 
                            rest_count, plc_code), (error, rows) => {
                            if (error) throw error;
                                if(rows.affectedRows > 0){
                                    res.send('{ "coupon_code" : "'+coupon_code+'"}')
                                }
                        })
            })
        })
    }else{
        connection.query(createcouponno(coupon_type), (error, rows) =>{
            if (error) throw error;
            coupon_code = rows[0].coupon_code;
            connection.query(selectcouponname(coupon_type), (error, rows) => {
                if (error) throw error;
                coupon_name = rows[0].coupon_name;
                        connection.query(insertcouponinfo(coupon_code, coupon_name, prod_name , coupon_type, dc_fee, dc_percent, end_date, 
                             rest_count, plc_code), (error, rows) => {
                            if (error) throw error;
                                if(rows.affectedRows > 0){
                                    res.send('{ "coupon_code" : "'+coupon_code+'"}')
                                }
                        })
            })
        })
    }
};
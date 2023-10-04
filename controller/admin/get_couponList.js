const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcouponlistasreg = require('../../query/admin/get_couponlist/select_couponlistasreg');
const selectcouponlistasuse = require('../../query/admin/get_couponlist/select_couponlistasuse');
const selectcouponlist = require('../../query/admin/get_couponlist/select_couponlist');

module.exports.getcouponlist = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let coupon_type = req.body.coupon_type;
    let is_use = req.body.is_use;
    let publish_type = req.body.publish_type;
    let car_no = req.body.car_no;
    let date_type = req.body.date_type;
    let start_count = req.body.start_count;
    let view_count = req.body.view_count;
    var list = '[\n';
    console.log(456789, req.body);
    // if(coupon_type == undefined){
    //     coupon_type == '';
    // }
    // if(is_use == undefined){
    //     is_use == '';
    // }
    // if(coupon_type == undefined){
    //     coupon_type == '';
    // }
    // if(publish_type == undefined){
    //     publish_type == '';
    // }
    // if(car_no == undefined){
    //     car_no == '';
    // }
    if(date_type == 'reg'){
        connection.query(selectcouponlistasreg(start_date, end_date, coupon_type, is_use, publish_type, car_no, start_count, view_count), (error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"coupon_no" : "'+ rows[i].coupon_no +'", "coupon_name" : "'+ rows[i].coupon_name+'", "coupon_type" : "'+ rows[i].coupon_type +
                    '", "is_use" : "'+ rows[i].is_use +'", "car_no" : "'+ rows[i].car_no +'", "dc_percent" : "'+ rows[i].dc_percent+
                    '", "dc_fee" : "'+ rows[i].dc_fee+'", "reg_date" : "'+ rows[i].reg_date +
                    '", "option_fee" : "'+ rows[i].option_fee+'", "dc_fee" : "'+ rows[i].dc_fee +
                    '", "use_date" : "'+ rows[i].use_date+'", "publish_type" : "'+ rows[i].publish_type+'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }
            else{
                res.send('[]');
            }
        })
    }else if(date_type == 'use'){
        connection.query(selectcouponlistasuse(start_date, end_date, coupon_type, is_use, publish_type, car_no, start_count, view_count), (error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"coupon_no" : "'+ rows[i].coupon_no +'", "coupon_name" : "'+ rows[i].coupon_name+'", "coupon_type" : "'+ rows[i].coupon_type +
                    '", "is_use" : "'+ rows[i].is_use +'", "car_no" : "'+ rows[i].car_no +'", "dc_percent" : "'+ rows[i].dc_percent+
                    '", "dc_fee" : "'+ rows[i].dc_fee+'", "reg_date" : "'+ rows[i].reg_date +
                    '", "option_fee" : "'+ rows[i].option_fee+'", "dc_fee" : "'+ rows[i].dc_fee +
                    '", "use_date" : "'+ rows[i].use_date+'", "publish_type" : "'+ rows[i].publish_type+'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }
            else{
                res.send('[]');
            }
        })
    }
    // }else{
    //     connection.query(selectcouponlist(coupon_type, is_use, publish_type, car_no), (error, rows) =>{
    //         if (error) throw error;
    //         if(rows.length > 0){
    //             for(var i =0; i< rows.length; i++){
    //                 list += '{"coupon_no" : "'+ rows[i].coupon_no +'", "coupon_name" : "'+ rows[i].coupon_name+'", "coupon_type" : "'+ rows[i].coupon_type +
    //                 '", "is_use" : "'+ rows[i].is_use +'", "car_no" : "'+ rows[i].car_no +'", "dc_percent" : "'+ rows[i].dc_percent+
    //                 '", "dc_fee" : "'+ rows[i].dc_fee+'", "reg_date" : "'+ rows[i].reg_date +
    //                 '", "option_fee" : "'+ rows[i].option_fee+'", "dc_fee" : "'+ rows[i].dc_fee +
    //                 '", "use_date" : "'+ rows[i].use_date+'", "publish_type" : "'+ rows[i].publish_type+'" },';
    //             }
    //             list = list.slice(0, -1);
    //             list += ']';
    //             res.send(list);

    //         }
    //         else{
    //             res.send('[]');
    //         }
    //     })
    // }
}   
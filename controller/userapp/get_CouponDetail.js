const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcoupondetail = require('../../query/userapp/get_coupondetail/select_coupondetail');

module.exports.getcoupondetail = (req, res) =>{
    let coupon_code = req.body.coupon_code
    connection.query(selectcoupondetail(coupon_code), (error, rows)=>{
        if (error) throw error;
        res.send('{"coupon_code" : "'+rows[0].coupon_code+'" , "coupon_name" : "'+rows[0].coupon_name+
        '", "dc_percent" : "'+rows[0].dc_percent+'", "expire_date" : "'+rows[0].expire_date+
        '", "rest_count" : "'+rows[0].rest_count+'", "reg_date" : "'+rows[0].reg_date+
        '", "use_date" : "'+ rows[0].use_date +'", "coupon_type" : "'+ rows[0].coupon_type +
        '", "coupon_type_name" : "'+ rows[0].coupon_type_name +'" }')
    })
    connection.end;

}


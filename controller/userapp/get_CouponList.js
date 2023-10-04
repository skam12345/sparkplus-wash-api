const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcouponinfo = require('../../query/userapp/get_couponlist/select_couponinfo');

module.exports.getcouponlist = (req, res) =>{
    let mem_no = req.body.mem_no;
    let coupon_type = req.body.coupon_type;
    var list = '[\n';

    connection.query(selectcouponinfo(mem_no, coupon_type), (error, rows) =>{
        for(var i = 0; i < rows.length; i++){
            list +=' {"coupon_code" : " '+ rows[i].coupon_code +'", "coupon_name" : "'+ rows[i].coupon_name +
            '", "dc_percent" : "'+ rows[i].dc_percent +'", "expire_date" : "'+ rows[i].expire_date +
            '", "rest_count": "'+ rows[i].rest_count +'" },'
        }
        list = list.slice(0, -1);
        list += ']';
        res.send(list);
       
    })
    connection.end;

}
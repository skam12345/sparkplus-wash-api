const mysql2 = require('mysql2');
const dbconfig = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmemcouponlist = require('../../query/userapp/get_memcouponlist/select_memcouponlist')

module.exports.getcouponlist = (req, res) =>{
    let mem_no = req.body.mem_no;
    let is_use = req.body.is_use;
    var list = '[\n';

    connection.query(selectmemcouponlist(mem_no, is_use), (error, rows) =>{
        if (error) throw error;
        console.log(rows.length);
        for(var i = 0; i < rows.length; i++){
            list +='{"coupon_code" : "'+ rows[i].coupon_code +'", "coupon_name"  : "'+ rows[i].coupon_name +
            '", "dc_percent" : "'+ rows[i].dc_percent +'", "expire_date" : "'+ rows[i].expire_date +
            '", "rest_count" : "'+ rows[i].rest_count +'", "reg_date" : "'+ rows[i].reg_date +
            '", "use_date" : "'+ rows[i].v +'", "coupon_type" : "'+ rows[i].coupon_type +
            '", "coupon_type_name": "'+ rows[i].coupon_type_name +'" },'
        }
        list = list.slice(0, -1);
        list += ']';
        res.send(list);
       
    })
    connection.end;

}

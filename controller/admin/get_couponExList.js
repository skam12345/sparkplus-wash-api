const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcouponexlist = require('../../query/admin/get_couponexlist/select_couponexlist');

module.exports.getcouponexlist = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let car_no = req.body.car_no;
    var list = '[\n';
    if(car_no == undefined){
        car_no = '';
    }

        connection.query(selectcouponexlist(start_date, end_date, car_no), (error, rows)=>{
            if (error) throw error;
            console.log(rows.length);
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"coupon_no" : "'+ rows[i].coupon_no +'", "coupon_name" : "'+ rows[i].coupon_name+'", "coupon_type" : "'+ rows[i].coupon_type +
                    '", "reg_date" : "'+ rows[i].reg_date +'", "is_publish" : "'+ rows[i].is_publish +'", "car_no" : "'+ rows[i].car_no +'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }
            else{
                res.send('[]');
            }
        })
    connection.end;
}


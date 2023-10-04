const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const getMembership = require('../../query/membership/getMembershipPay');

module.exports.get_mbershipPay = (req, res) =>{
    var carno = req.body.car_no;
    console.log(2, req.body);
    connection.query(getMembership(carno),(error, rows) => {
        if (error) throw error;
        if(rows.length =='0'){
            res.send('없는 차량번호입니다');
        }else{
            res.send('{ "prod_code" : "'+rows[0].prod_code+ '", "prod_name" : "'+rows[0].prod_name +'", "is_brush" : "'+rows[0].is_brush +'" }');
        }
    })
}
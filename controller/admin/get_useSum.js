const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectusesum = require('../../query/admin/get_usesum/select_usesum');
const selectusesumwithcarno = require('../../query/admin/get_usesum/select_usesumwithcarno');

module.exports.getusesum = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let use_type = req.body.use_type;
    let car_no = req.body.car_no;
    if (use_type == undefined){
        use_type = '';
    }
    if(car_no == undefined){
        connection.query(selectusesum(start_date, end_date, use_type), (error, rows) =>{
            if (error) throw (error);
            if(rows.length > 0){
                res.send('{"amount_fee" : "'+rows[0].amount_fee+'" , "account_fee" : "'+rows[0].account_fee+'"}')
            }else{
                 res.send('{"amount_fee" : "0" , "account_fee" : "0"}')
            }
        })
    }else{
        connection.query(selectusesumwithcarno(start_date, end_date, use_type, car_no), (error, rows) =>{
            if (error) throw (error);
            if(rows.length > 0){
                res.send('{"amount_fee" : "'+rows[0].amount_fee+'" , "account_fee" : "'+rows[0].account_fee+'"}')
            }else{
                res.send('{"amount_fee" : "0" , "account_fee" : "0"}')
           }
        })
    }
    connection.end;
}
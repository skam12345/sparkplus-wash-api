const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectmonthpay = require('../../query/admin/get_statics/select_month_pay');
const selecttodaypay = require('../../query/admin/get_statics/select_today_pay');
const selecttodayuse = require('../../query/admin/get_statics/select_today_use');

module.exports.getstatics = (req, res) =>{
    let result = '';
    connection.query(selectmonthpay, (error, rows) =>{
        if (error) throw error;
        result = '{"month_pay_amount" : "'+rows[0].month_pay_amount+'", "month_pay_count" : "'+ rows[0].month_pay_count +'",';
    })
    connection.query(selecttodaypay, (error, rows) =>{
        if (error) throw error;
        result += '"today_pay_amount" : "'+rows[0].today_pay_amount+'", "today_pay_count" : "'+ rows[0].today_pay_count +'",';
    })
    connection.query(selecttodayuse, (error, rows) =>{
        if (error) throw error;
        result += '"today_use_amount" : "'+rows[0].today_use_amount+'", "today_use_count" : "'+ rows[0].today_use_count +'"}';
        console.log('ok');
        console.log(result);
        res.send(result);
    })
    connection.end;
}
const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpaylistwithcarno = require('../../query/admin/get_paylist/select_paylistwithcarno');
const selectpaylist = require('../../query/admin/get_paylist/select_paylist');

module.exports.getpaylist = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let terminal_type = req.body.terminal_type;
    let auth_type = req.body.auth_type;
    let buy_type = req.body.buy_type;
    let car_no = req.body.car_no;
    var list = '[\n';
    console.log(req.body);
    console.log(terminal_type);
    console.log(auth_type);
    console.log(buy_type);

    if (terminal_type == undefined){
        terminal_type = '';
    }
    if (auth_type == undefined){
        auth_type = '';
    }
    if (buy_type == undefined){
        buy_type = '';
    }
    if(car_no == undefined){
        connection.query(selectpaylist(start_date, end_date, terminal_type, auth_type, buy_type), (error, rows)=>{
            if (error) throw error;
            console.log(rows.length);
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"trno" : "'+ rows[i].trno +'", "terminal_name" : "'+ rows[i].terminal_name+'", "pay_date" : "'+ rows[i].pay_date +
                    '", "auth_name" : "'+ rows[i].auth_name +'", "buy_name" : "'+ rows[i].buy_name +'", "car_no" : "'+ rows[i].car_no+
                    '", "prod_name" : "'+ rows[i].prod_name+'", "wash_fee" : "'+ rows[i].wash_fee +
                    '", "option_fee" : "'+ rows[i].option_fee+'", "dc_fee" : "'+ rows[i].dc_fee +
                    '", "pay_fee" : "'+ rows[i].pay_fee+'", "pay_name" : "'+ rows[i].pay_name +
                    '", "auth_no" : "'+ rows[i].auth_no+'", "token" : "'+ rows[i].token + '", "seq_no" : "'+ rows[i].seq_no+
                    '", "trd_date" : "'+ rows[i].trd_date +'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }
            else{
                res.send('[]');
            }
        })
    }else{
        connection.query(selectpaylistwithcarno(start_date, end_date, terminal_type, auth_type, buy_type, car_no), (error, rows)=>{
            if (error) throw error;
            console.log(rows.length);
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"trno" : "'+ rows[i].trno +'", "terminal_name" : "'+ rows[i].terminal_name+'", "pay_date" : "'+ rows[i].pay_date +
                    '", "auth_name" : "'+ rows[i].auth_name +'", "buy_name" : "'+ rows[i].buy_name +'", "car_no" : "'+ rows[i].car_no+
                    '", "prod_name" : "'+ rows[i].prod_name+'", "wash_fee" : "'+ rows[i].wash_fee +
                    '", "option_fee" : "'+ rows[i].option_fee+'", "dc_fee" : "'+ rows[i].dc_fee +
                    '", "pay_fee" : "'+ rows[i].pay_fee+'", "pay_name" : "'+ rows[i].pay_name +
                    '", "auth_no" : "'+ rows[i].auth_no+'", "token" : "'+ rows[i].token + '", "seq_no" : "'+ rows[i].seq_no+
                    '", "trd_date" : "'+ rows[i].trd_date +'" },';
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
    connection.end;
}


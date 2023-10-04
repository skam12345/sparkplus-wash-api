const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectuselist = require('../../query/admin/get_uselist/select_uselist');
const selectuselistwithcarno = require('../../query/admin/get_uselist/select_uselistwithcarno');

module.exports.getuselist = (req, res) =>{
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let use_type = req.body.use_type;
    let car_no = req.body.car_no;
    var list = '[\n';
    if (use_type == undefined){
        use_type = '';
    }
    if(car_no == undefined){
        connection.query(selectuselist(start_date, end_date, use_type), (error, rows) =>{
            if (error) throw (error);
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"car_no" : "'+ rows[i].car_no +'", "use_name" : "'+ rows[i].use_name+'", "use_date" : "'+ rows[i].use_date +
                    '", "qr_is" : "'+ rows[i].qr_is +'", "prod_name" : "'+ rows[i].prod_name +
                    '", "prod_name" : "'+ rows[i].prod_name+'", "wash_fee" : "'+ rows[i].wash_fee +
                    '", "option_name" : "'+ rows[i].option_name+'", "brush_is" : "'+ rows[i].brush_is +
                    '", "pay_fee" : "'+ rows[i].pay_fee+'", "plc_code" : "'+ rows[i].plc_code +
                    '", "seq_no" : "'+ rows[i].seq_no+'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }else{
                res.send('[]');
            }
        })
    }else{
        connection.query(selectuselistwithcarno(start_date, end_date, use_type, car_no), (error, rows) =>{
            if (error) throw (error);
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"car_no" : "'+ rows[i].car_no +'", "use_name" : "'+ rows[i].use_name+'", "use_date" : "'+ rows[i].use_date +
                    '", "qr_is" : "'+ rows[i].qr_is +'", "prod_name" : "'+ rows[i].prod_name +
                    '", "prod_name" : "'+ rows[i].prod_name+'", "wash_fee" : "'+ rows[i].wash_fee +
                    '", "option_name" : "'+ rows[i].option_name+'", "brush_is" : "'+ rows[i].brush_is +
                    '", "pay_fee" : "'+ rows[i].pay_fee+'", "plc_code" : "'+ rows[i].plc_code +
                    '", "seq_no" : "'+ rows[i].seq_no+'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }else{
                res.send('[]');
            }
        })
    }
    connection.end;
}



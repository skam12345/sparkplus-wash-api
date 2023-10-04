const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectcarlist = require('../../query/admin/get_washctl/select_carlist');

module.exports.getwashctl = (req, res) =>{
    var list = '[\n';
    connection.query(selectcarlist, (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"car_no" : "'+ rows[i].car_no +'", "prod_name" : "'+ rows[i].prod_name+'", "option_name" : "'+ rows[i].option_name +
                '", "is_brush" : "'+ rows[i].is_brush +'", "use_seq" : "'+ rows[i].use_seq +
                '", "wash_seq" : "'+ rows[i].wash_seq+'" },';
            }
            list = list.slice(0, -1);
            list += ']';
            res.send(list);

        }else{
            res.send('[]');
        }
    })
    connection.end;
}
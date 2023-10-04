const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectprodfirstlist = require('../../query/admin/get_prodfirstlist/select_prodfirstlist');

module.exports.getprodfirstlist = (req, res) =>{
    var list = '[\n';
    connection.query(selectprodfirstlist, (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list +='{"prod_code" : "'+ rows[i].prod_code +'", "prod_name" : "'+ rows[i].prod_name +'", "plc_code" : "'+ rows[i].plc_code +'"} ,';
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
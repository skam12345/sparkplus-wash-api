const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectstaticsdaysale = require('../../query/admin/get_staticdayslae/select_staticdaysale');

module.exports.getstaticsdaysale = (req, res) => {
    var list = '[\n';

    connection.query(selectstaticsdaysale, (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"day_date" : "'+ rows[i].day_date +'", "day_amount" : "'+ rows[i].day_amount +'"} ,';
            }
            list = list.slice(0, -1);
            list += ']';
            res.send(list);
    
        } else{
            res.send('[]');
        } 
    })
}
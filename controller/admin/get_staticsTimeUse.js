const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectstaticstimeuse = require('../../query/admin/get_staticstimeuse/select_staticstimeuse');

module.exports.getstaticstimeuse = (req, res) => {
    var list = '[\n';

    connection.query(selectstaticstimeuse, (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"time_hour" : "'+ rows[i].time_hour +'", "time_use" : "'+ rows[i].time_use +'"} ,';
            }
            list = list.slice(0, -1);
            list += ']';
            res.send(list);    
        } else{
            res.send('[]');
        } 
    })
}
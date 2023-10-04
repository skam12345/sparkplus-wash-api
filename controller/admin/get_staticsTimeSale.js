const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectstaticstimesale = require('../../query/admin/get_staticstimesale/select_staticstimesale');

module.exports.getstaticstimesale = (req, res) => {
    var list = '[\n';

    connection.query(selectstaticstimesale, (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
                list += '{"time_hour" : "'+ rows[i].time_hour +'", "time_amount" : "'+ rows[i].time_amount +'"} ,';
            }
            list = list.slice(0, -1);
            list += ']';
            res.send(list);
        } else{
            res.send('[]');
        }  
    })
}
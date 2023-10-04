const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectprodmenulist = require('../../query/admin/get_prodmenulist/select_prodmenulist');

module.exports.getprodmenulist = (req, res) =>{
    var list = '[\n';
    connection.query(selectprodmenulist, (error, rows) =>{
        if (error) throw error;
        if(rows.length > 0){
            for(var i =0; i< rows.length; i++){
        list +='{"prod_code" : "'+ rows[i].prod_code +'", "prod_name" : "'+ rows[i].prod_name +'"} ,'
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
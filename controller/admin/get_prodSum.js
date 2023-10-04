const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectprodsum = require('../../query/admin/get_prodsum/select_prodsum');
const selectprodsumasmenutype = require('../../query/admin/get_prodsum/select_prodsumasmenutype');

module.exports.getprodsum = (req, res) =>{
    let prod_type = req.body.prod_type;
    let menu_type = req.body.menu_type;
    let is_use = req.body.is_use;

    if(menu_type == 0){
        connection.query(selectprodsum(prod_type,is_use),(error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
                res.send('{"account_product" : "'+ rows[0].account_product +'"}')
            }else{
                res.send('{"account_product" : "0"}')
            }
        })
    }else{
        connection.query(selectprodsumasmenutype(prod_type,is_use, menu_type),(error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
                res.send('{"account_product" : "'+ rows[0].account_product +'"}')
            }else{
                res.send('{"account_product" : "0"}')
            }
        })
    }
}
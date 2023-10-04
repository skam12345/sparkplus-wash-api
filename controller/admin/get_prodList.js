const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectprodlist = require('../../query/admin/get_prodlist/select_prodlist');
const selectprodlistasmenutype = require('../../query/admin/get_prodlist/select_prodlistasmenutype');

module.exports.getprodlist = (req, res) =>{
    let prod_type = req.body.prod_type;
    let menu_type = req.body.menu_type;
    let is_use = req.body.is_use;
    var list = '[\n';

    if(prod_type == undefined){
        prod_type = '';
    }
    if(menu_type == undefined){
        menu_type = '';
    }
    if(is_use == undefined){
        is_use = '';
    }
    
    if(menu_type == 0){
        connection.query(selectprodlist(prod_type,is_use),(error, rows) =>{
            if (error) throw error;
                if(rows.length > 0){
                    for(var i =0; i< rows.length; i++){
                        list +='{"seq_no" : "'+ rows[i].seq_no +'", "prod_name" : "'+ rows[i].prod_name +
                        '", "prod_fee" : "'+ rows[i].prod_fee +'", "prod_type" : "'+ rows[i].prod_type +'", "is_use" : "'+ rows[i].is_use +
                        '", "dc_fee" : "'+ rows[i].dc_fee +'", "reg_date" : "'+ rows[i].reg_date +'"} ,'
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
        connection.query(selectprodlistasmenutype(prod_type,is_use, menu_type),(error, rows) =>{
            if (error) throw error;
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list +='{"seq_no" : "'+ rows[i].seq_no +'", "prod_name" : "'+ rows[i].prod_name +
                    '", "prod_fee" : "'+ rows[i].prod_fee +'", "prod_type" : "'+ rows[i].prod_type +'", "is_use" : "'+ rows[i].is_use +
                    '", "dc_fee" : "'+ rows[i].dc_fee +'", "reg_date" : "'+ rows[i].reg_date +'"} ,'
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
}
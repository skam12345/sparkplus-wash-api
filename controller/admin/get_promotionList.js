const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpromotionlist = require('../../query/admin/get_promotionlist/select_promotionlist')

module.exports.getpromotionlist = (req, res) =>{
    let title = req.body.title;
    var list = '[\n';

    if (title == undefined){
        title = '';
    }
        connection.query(selectpromotionlist(title), (error, rows)=>{
            if (error) throw error;
            console.log(rows.length);
            if(rows.length > 0){
                for(var i =0; i< rows.length; i++){
                    list += '{"prom_title" : "'+ rows[i].prom_title +'", "start_date" : "'+ rows[i].start_date+'", "end_date" : "'+ rows[i].end_date +
                    '", "is_use" : "'+ rows[i].is_use +'", "prom_type_name" : "'+ rows[i].prom_type_name +'", "reg_date" : "'+ rows[i].reg_date+
                    '", "seq_no" : "'+ rows[i].seq_no+'" },';
                }
                list = list.slice(0, -1);
                list += ']';
                res.send(list);

            }
            else{
                res.send('[]');
            }
        })
    connection.end;
}


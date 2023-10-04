const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const selectpromotionsum = require('../../query/admin/get_promotionsum/select_promotionsum')

module.exports.getpromotionsum = (req, res) =>{
    let title = req.body.title;

    if (title == undefined){
        title = '';
    }
        connection.query(selectpromotionsum(title), (error, rows)=>{
            if (error) throw error;
            console.log(rows.length);
            if(rows.length > 0){
                res.send('{"account_fee" : "'+ rows[0].account_fee +'"}')
            }
            else{
                res.send('{"account_fee" : "0"}')
            }
        })
    connection.end;
}


const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const apiin1 = require('../../query/api/api_in1');
const apiin2 = require('../../query/api/api_in2');


module.exports.reccarno = (req, res) =>{
    var carno = req.body.car_no;
    if (carno == '객체'){
        carno = 'N';
        if(req.body.device_id == undefined){
            res.send('{"resultCode" : "N01"}');
        }else{
            if(req.body.car_no == undefined ){
                res.send('{"resultCode" : "N02"}');
            }else{
                if(req.body.device_id == 'PC01'){
                    connection.query(apiin1(carno),(error, rows)=>{
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"resultCode" : "00"}');
                        }else{
                            res.send('{"resultCode" : "N03"}');
                        }
                    })
                }else{
                    connection.query(apiin2(carno),(error, rows)=>{
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"resultCode" : "00"}');
                        }else{
                            res.send('{"resultCode" : "N03"}');
                        }
                    })
                    
                }
            }
        }
    }else{
        carno = req.body.car_no;

        if(req.body.device_id == undefined){
            res.send('{"resultCode" : "N01"}');
        }else{
            if(req.body.car_no == undefined ){
                res.send('{"resultCode" : "N02"}');
            }else{
                if(req.body.device_id == 'PC01'){
                    connection.query(apiin1(carno),(error, rows)=>{
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"resultCode" : "00"}');
                        }else{
                            res.send('{"resultCode" : "N03"}');
                        }
                    })
                }else{
                    connection.query(apiin2(carno),(error, rows)=>{
                        if (error) throw error;
                        if(rows.affectedRows > 0){
                            res.send('{"resultCode" : "00"}');
                        }else{
                            res.send('{"resultCode" : "N03"}');
                        }
                    })
                    
                }
            }
        }
    }
   
}
const mysql2      = require('mysql2');
const dbconfig   = require('../../config/database');
const connection = mysql2.createConnection(dbconfig);

const mainCarNo_chkMembership = require('../../query/mainCarNo/mainCarNo_chkMembership');
const mainCarNo_chkFleet = require('../../query/mainCarNo/mainCarNo_chkFleet');
const mainCarNo_chkFleetDiscount = require('../../query/mainCarNo/mainCarNo_chkFleetDiscount');
const mainCarNo_chkPersonal = require('../../query/mainCarNo/mainCarNo_chkPersonal');
const mainCarNo_brush = require('../../query/mainCarNo/mainCarNo_brush'); 


module.exports.chkService = (req, res) =>{
    var carno = req.body.car_no;
    var mainService = '';
    connection.query(mainCarNo_chkMembership(carno),(error, rows)=>{
        if (error) throw error;
        if(rows[0].Membershipcnt > 0){
            mainService = '{"is_membership" : "Y", ';
        }else{
            mainService = '{"is_membership" : "N", ';
        }
    })
    connection.query(mainCarNo_chkFleet(carno),(error, rows)=>{
        if (error) throw error;
        if(rows[0].fleetCnt > 0){
            mainService +='"is_fleet_pay" : "Y", ';
        }else{
            mainService +='"is_fleet_pay" : "N", ';
        }
    })

    connection.query(mainCarNo_chkFleetDiscount(carno),(error, rows)=>{
        if (error) throw error;
            if(rows[0].fleetDiscount > 0){
            mainService +='"is_fleet_dc" : "Y", ';
        }else{
            mainService +='"is_fleet_dc" : "N", ';
        }
    })

    connection.query(mainCarNo_chkPersonal(carno),(error, rows)=>{
        if (error) throw error;
            if(rows[0].chkPersonal > 0){
            mainService +='"is_member" : "Y", ';
        }else{
            mainService +='"is_member" : "N", ';
        }
    })

    connection.query(mainCarNo_brush,(error, rows)=>{
        if (error) throw error;
        mainService = mainService +'"plc_brush" : "'+rows[0].plc_brush+'"}';
            res.send(mainService);
        });
   
 
}
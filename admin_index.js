const express    = require('express');
const router = require('./route/router')

const http = require('http');
const https = require('https');
const fs = require('fs');

const app = express();
// const hostName = '192.168.0.4'
const hostName = '127.0.0.1'
const cors = require('cors');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.set('port', process.env.PORT || 9000);



// http 일때!
app.listen(app.get('port'), hostName , () => {
    console.log('Express server listening on port ' + app.get('port'));
  });


app.use(router);


// https 일때!
// const options = { // letsencrypt로 받은 인증서 경로를 입력
//   key: fs.readFileSync('./privkey.pem'),
//   cert: fs.readFileSync('./cert.pem')
//   };

//   https.createServer(options, app, (req, res) => {
//   }).listen(9000, hostName, () => {
//     console.log(hostName);
//     console.log('서버 포트: 9000 ...');
//   });
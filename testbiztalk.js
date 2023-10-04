var request = require('request');
var token;

var jsonData = {bsid : 'moonsong_1', passwd : '66bb3ae17994de9fc99b93178f94b573cedc3e5b'};
request.post({
    headers:{'Content-Type' : 'application/json'},
    url : 'https://www.biztalk-api.com/v2/auth/getToken',
    body:jsonData,
    json:true},
    function(error,response,body){
        token = body.token;  
        request.get({
            headers:{'Content-Type' : 'application/json', 'bt-token' : token},
            url : 'https://www.biztalk-api.com/v2/kko/getResultAll',
            body:jsonData,
            json:true},
            function(error,response,body){
                console.log(body);
        });
        
});

var http = require('http')
var url = process.argv[2]
// var url = 'http://localhost:64477'
// console.log(url)

    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.on('data',function(data){
            console.log(data);
        });
        response.on('error', function(err){
            console.error;
        })
    }).on('error', console.error)


    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // }).on('error', console.error)
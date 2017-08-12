var http = require('http')
var url = process.argv[2]

const StringBuilder = require('node-stringbuilder');
    var sb = new StringBuilder('');
    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.on('data',function(data){
            sb.append(data)
            
        });
        response.on('error', function(err){
            console.error;
        })
    }).on('error', console.error)
    console.log(sb.tostring());


    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // }).on('error', console.error)
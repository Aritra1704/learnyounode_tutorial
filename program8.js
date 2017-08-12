var http = require('http')
const BufferList = require('bl')
var url = process.argv[2]

    var bl = new BufferList();
    http.get(url, function(response) {
        response.setEncoding('utf8');

        response.on('data',function(data){
            bl.append(new Buffer(data))
            
        });
        response.on('error', function(err){
            console.error;
        })
        response.on('end', function() {
            console.log(bl.length);
            console.log(bl.toString());
        })
    }).on('error', console.error)

    
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })
var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var filepath = process.argv[3]

    var server = http.createServer(function(request, response) {
        var file = fs.createReadStream(filepath)
        response.writeHead(200, {"Content-Type" : "text/plain"})
        file.pipe(response)
    })
    server.listen(Number(port))


// var http = require('http')
//     var fs = require('fs')
    
//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })
    
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))
var http = require('http')
var url  = require('url');

var port = process.argv[2]

    var server = http.createServer(function(request, response) {
        if(request.method != 'GET') {
            return response.end('Not a GET request\n')
        }

        var url_parts = url.parse(request.url, true);
        var pathName = url_parts.pathname;
        var startTime = url_parts.query.iso;
        var responseData = '';

        if(pathName === '/api/unixtime') {
           responseData = getUnixTimeStamp(startTime);
        } else if(pathName === '/api/parsetime') {
            responseData = getTimeObject(startTime);
        }
        
        if(responseData) {
            var resData = JSON.stringify(responseData);
            
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(resData);
        } else {
            response.writeHead(404);
            response.end();
        }
    })
    server.listen(Number(port))

    function getUnixTimeStamp(startTime) {
        var date = new Date(getTimeStamp(startTime));

        var data = {
            unixtime: date.getTime()
        };
        return data;
    }

    function getTimeObject(startTime) {
        var date = new Date(getTimeStamp(startTime));

        var data = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        return data;
    }

    function getTimeStamp(startTime) {
        return Date.parse(startTime);
    }



    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime: time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))
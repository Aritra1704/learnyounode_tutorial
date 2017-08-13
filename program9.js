var http = require('http')
const BufferList = require('bl')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]


    callApis(1)

    function callApis(position) {
        position++
        var bl = new BufferList();        
        if(position < process.argv.length) {
            
            http.get(process.argv[position], function (response) {
                response.setEncoding('utf8');
                response.on('data',function(data){
                    bl.append(new Buffer(data))
                    
                });
                response.on('error', function(err){
                    console.error;
                })
                response.on('end', function() {
                    // console.log(bl.length);
                    console.log(bl.toString());

                    callApis(position)
                }).on('error', console.error)
            })
        }
    }

    /** LEARN YOU NODE SOLUTION **/
    // var http = require('http')
    // var bl = require('bl')
    // var results = []
    // var count = 0
    
    // function printResults () {
    //   for (var i = 0; i < 3; i++) {
    //     console.log(results[i])
    //   }
    // }
    
    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err) {
    //         return console.error(err)
    //       }
    
    //       results[index] = data.toString()
    //       count++
    
    //       if (count === 3) {
    //         printResults()
    //       }
    //     }))
    //   })
    // }
    
    // for (var i = 0; i < 3; i++) {
    //   httpGet(i)
    // }
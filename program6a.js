var mymodule = require('./program6b.js')
var dir = process.argv[2]
var ext = process.argv[3]

    mymodule(dir, ext, function(err, list) {
        if(err)
            return console.error('There was an error:', err)
        else
            list.forEach(function(element) {
                console.log(element)    
            });
    })
var fs = require('fs')
var path = require('path')

    var dir = process.argv[2]
    fs.readdir(dir, function(err, files) {
        if(err)
            return console.log(err)

        var filecount = files.length
        for(i = 0; i < filecount; i++)
            if(path.extname(files[i]).endsWith("." + process.argv[3]))
                console.log(path.basename(files[i]))
    })

    /** LEARN YOU NODE SOLUTION **/
    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]
    
    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })
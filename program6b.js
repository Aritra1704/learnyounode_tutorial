var fs = require('fs')
var path = require('path')

module.exports = function (folder, ext, callback) {
    //   console.log(folder)
    //   console.log(ext)
    var array = [];

        fs.readdir(folder, function (err, files) {
        if (err) return callback(err)
        files.forEach(function (file) {
            if (path.extname(file) === ext) {
                array.push(file)
            //   console.log(file)
            }
        })
        callback(null, array)
    })
}
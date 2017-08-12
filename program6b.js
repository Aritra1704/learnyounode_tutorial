var fs = require('fs')
var path = require('path')

module.exports = function (folder, ext, callback) {
    var extension = '.' + ext
    var array = [];

        fs.readdir(folder, function (err, files) {
        if (err) return callback(err)
        files.forEach(function (file) {
            if (path.extname(file) === extension) {
                array.push(file)
            }
        })
        callback(null, array)
    })
}
var length = process.argv.length

var result = 0
for(i = 2; i < length; i++)
    result += parseInt(process.argv[i])

console.log(result)
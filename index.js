const fs = require('fs')

const saft = require('saft-file-manager')


const file = fs.readFileSync(`./saft.xml`)

const result = saft.parseFile(file.buffer)

console.log(result)

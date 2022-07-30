const fs = require('fs')
const path  = require('path')

fs.readFile(path.join(__dirname,'../files/1.txt'),'utf-8',(err,dataStr)=>{
  console.log(err,dataStr)
})
console.log('basename',path.basename(path.join(__dirname,'../files/1.txt'),'.txt'))
console.log('extname',path.extname(path.join(__dirname,'../files/1.txt'),'.txt'))

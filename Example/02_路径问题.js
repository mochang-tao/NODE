const fs = require('fs')

// fs.readFile('C:\\Users\\huangjuzi\\Desktop\\node\\NODE\\files\\1.txt','utf-8',(err,dataStr)=>{
//   console.log(err,dataStr)
// })

fs.readFile( __dirname +'/../files/1.txt','utf-8',(err,dataStr)=>{
  console.log(err,dataStr)
})
console.log(__dirname)
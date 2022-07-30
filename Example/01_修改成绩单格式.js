const fs = require('fs')
fs.readFile('../files/成绩单.txt','utf-8',function(error,dataStr){
  if(error){
    console.log("读取错误"+error)
  }else{
    let data = dataStr.split(' ')
    let dataNew = []
    for(item of data){
      item =  item.replace('=','：')
      dataNew.push(item)
    }
    let lod =  dataNew.join('\r\n')
    fs.writeFile('../files/new成绩单',lod,(error)=>{
      console.log(error)
    })
  }
})
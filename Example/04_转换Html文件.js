const fs = require('fs')
const path =require('path')

const regStyle = /<style>[\s\S]*<\/style>/

const regString = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,'../files/index.html'),'utf-8',(err,dataStr)=>{

  resolveHtml(dataStr)
  function resolveCss(html){
    const r1 = regStyle.exec(html)
    const newCss = r1[0].replace('<style>','').replace('</style>','')

    fs.writeFile(path.join(__dirname,'../clock/index.css'),newCss,(err)=>{
     if(err)return console.log('css 文件写入失败'+err)
    })
  }
  function resolveJs(html){
    const r2 = regString.exec(html)
    const newJs = r2[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'../clock/index.js'),newJs,(err)=>{
      if(err) return console.log('Js文件写入失败'+err)
    })
  }
  function resolveHtml(html){
    const newHteml = html.replace(regStyle,"<link  rel='stylesheet' href='../clock/index.css'  />").replace(regString,"<script src='../clock/index.js'></script>")
    fs.writeFile(path.join(__dirname,'../clock/index.html'),newHteml,(err)=>{
      if(err) return console.log('写入失败')
      else{
        console.log('写入成功')
      }
    })
  }
 
})
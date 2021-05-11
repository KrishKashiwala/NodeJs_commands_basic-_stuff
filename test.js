// const {per, ages} = require('./people')
// console.log(per)
// console.log(ages)
const fs =  require('fs')
const path = require('path')
const http = require('http')

    // fs.readFile(path.join(__dirname , './content.txt') , (error , data) => {
    //     if(error) throw error;
    //     console.log(data.toString())
    //     console.log('file reading on server 1000')
    // })
    // fs.writeFile(path.join(__dirname , 'content.txt') , 'hello world' , () => {
    //     console.log('file was consoled')
    // }) 
    
    // streams basically create a buffer and chunk amount of data . (good to use)


const rs = fs.createReadStream(path.join(__dirname, 'content.txt') , {encoding: 'utf8'})
rs.on('data' , (chunk) => {
    console.log("............new chunk...........")
    console.log(chunk)
})
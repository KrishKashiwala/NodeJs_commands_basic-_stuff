const http = require('http')
const fs = require('fs')
const path = require('path')
let route = '/server'
console.log(route)
http.createServer((req , res) => {
    res.setHeader('Content-Type', 'text/html')
    switch(req.url){
        case '/items':
            route += '/index.html'
            break;
        case '/home' : 
            route += '/home.html'
            break;
    }
    
    fs.readFile(route, (err , content) =>{
        if(err) console.log(err) 
        else{
            res.write(content)
        }
        res.end();
    })
  
}).listen(3000 , () => {
    console.log('server listening on port 3000')
})
// lodash defintely usable to checkout.
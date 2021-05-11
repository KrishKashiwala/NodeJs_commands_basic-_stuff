const express = require('express')
const path = require('path')
const app= express();
app.set('view engine', 'ejs')
app.set('view' , 'server')
app.listen(3000)
app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , './server/index.html'));
})

app.get('/about' , (req , res) => {
    res.sendFile(path.join(__dirname , './server/about.html'));
})
app.get('/about-in' , (req , res) => {
    res.redirect('/');
})

app.use( (req , res) => {
    setTimeout(() =>{

    res.sendFile(path.join(__dirname , './server/404page.html'));   
    } , 3000)

})
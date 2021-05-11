const express = require('express')
const path = require('path')
const app= express();
app.set('view engine', 'ejs')
// for custom folder rather than views
// app.set('views' , path.join(__dirname , './temp'))
app.listen(3000)
app.get('/' , (req , res) => {
    res.render('index')
})

app.get('/about' , (req , res) => {
    res.render('about')
})
app.get('/about-in' , (req , res) => {
    res.redirect('/');
})

app.use( (req , res) => {
    setTimeout(() =>{
    res.sendFile(path.join(__dirname , './server/404page.html'));   
    } , 3000)

})
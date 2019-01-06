var express=require('express')
var app=express()
var body=require('body-parser')
var path=require('path');
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var session=require('express-session');
var moment=require('moment')

var user=require('./routes/user')
var task=require('./routes/task')
var colab=require('./routes/colab')

//middleware for body
app.use(body.json())
app.use(body.urlencoded({extended:true}))

//define folder where angular code lies
app.use(express.static(path.join(__dirname,'dist/todo/')))
//to run angulars index.js 
/*
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'dist/todo/index.html'))
})
*/

//passport middlewares

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/user',user)
app.use('/task',task)
app.use('/colab',colab)



app.listen(3000)
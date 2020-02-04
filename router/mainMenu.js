const express = require('express');
const router = express.Router();
var data = require('../public/data.json');

//Main menu routes

//routes
router.get('/',(req,res)=>{
  res.render('login');
});
router.get('/login',(req,res)=>{
  res.render('login');
});
router.get('/people',(req,res)=>{
  res.render('home', {
                data:data
        });
});
router.get('/register',(req,res)=>{
  res.render('register');
});
router.get('/groups',(req,res)=>{
  res.render('groups');
});
router.get('/companies',(req,res)=>{
  res.render('companies');
});
router.get('/userprofile',(req,res)=>{
  res.render('userProfile');
});
router.get('/users',(req,res)=>{
  res.render('onlineUsers');
});
//Handling all the requests made
router.post('/login',(req,res)=>{
    var email = req.body.email;
    var pass = req.body.password;
    console.log({email,pass});
  res.redirect('register');
});
//post route for register
router.post('/register',(req,res)=>{
    var data = {
      email : req.body.email,
      password:req.body.password,
      first_name:req.body.fName,
      last_name:req.body.lName,
      userName:req.body.uName
    };
    console.log(data);
  res.redirect('register');
});
module.exports = router

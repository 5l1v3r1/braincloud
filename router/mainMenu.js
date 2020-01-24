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
router.get('/groups',(req,res)=>{
  res.render('groups');
});
router.get('/companies',(req,res)=>{
  res.render('Companies');
});
router.get('/userprofile',(req,res)=>{
  res.render('userProfile');
});
router.get('/users',(req,res)=>{
  res.render('onlineUsers');
});

module.exports = router

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('in /');
  res.render('index', { title: 'If You Give A Shit About Harper' });
});

router.get('/howtovote',function(req,res,next){
  res.render('howtovote', {title:'How to Vote'});
})

router.get('/contact',function(req,res,next){
  res.render('contact',{title:"Contact Us"});
})

module.exports = router;

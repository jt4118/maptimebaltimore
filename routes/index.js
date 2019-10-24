var express = require('express');
var router = express.Router(); 

/* GET home page */
router.get('/', function( req, res, next){
   res.render('index', { title: 'Street Car Web Map' });
});

module.exports = router;
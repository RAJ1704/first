var express = require('express');
var router = express.Router();

var {Register,login} = require('../controller/Registercontroller');

/* GET form-login page. */
router.get('/', function(req, res, next) {
  res.render('form-login', { title: 'Express' });
});
router.post('/',login);

/* GET form-login page. */
router.get('/form-register', function(req, res, next) {
  res.render('form-register',{ title: 'Express' });
});

router.post('/form-register',Register);

/* GET home page. */
router.get('/', function(req, res, next) {   
  
  res.render('from-login', { title:'Express' });
});

router.get('/form-register', function(req, res, next) {
  res.render('form-register', { title:'Express' });
});
router.post('/form-register', Register);

router.get('/chat', function(req, res, next) {
  res.render('chat', { title:'Express' });
});

router.get('/explore', function(req, res, next) {
  res.render('explore', { title:'Express' });
});

router.get('/feed', function(req, res, next) {
  res.render('feed', { title:'Express' });
});

router.get('/market', function(req, res, next) {
  res.render('market', { title:'Express' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { title:'Express' });
});

router.get('/setting', function(req, res, next) {
  res.render('setting', { title:'Express' });
});

router.get('/trending', function(req, res, next) {
  res.render('trending', { title:'Express' });
});

module.exports = router;

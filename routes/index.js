const express = require('express');
const router = express.Router();

const moment = require('moment');
const messages = [
  {
    text: "Hello, how are you?",
    user: "Bob",
    added: moment(new Date()).format('MMMM Do YYYY')
  },
  {
    text: "Hey, how's it going?",
    user: "Alice",
    added: moment(new Date()).format('MMMM Do YYYY')
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages : messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  console.log(req.body);
  messages.push({
    text: req.body.formMessage,
    user: req.body.userName,
    added: moment(new Date()).format('MMMM Do YYYY')
  })
  res.redirect('/');
});

module.exports = router;

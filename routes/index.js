const express = require('express');
const router = express.Router();

const Message = require("../models/message");

const moment = require('moment');

async function getMessages() {
  try {
    messages = await Message.find({}).exec()
  } catch (error) {
    console.log(error);
  }
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find({}).exec();
    res.render('index', { title: 'Mini Messageboard', messages : messages });
  } catch (error) {
    console.log(error);
  }
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', async function(req, res, next) {
  console.log(req.body);
  const newMessage = {
    text: req.body.formMessage,
    user: req.body.userName,
    added: moment(new Date()).format('MMMM Do YYYY')
  }
  const newMessageDoc = new Message(newMessage);
  await newMessageDoc.save();
  res.redirect('/');
});

module.exports = router;

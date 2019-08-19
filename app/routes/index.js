const express = require('express');
const app = express();
var bodyParser = require('body-parser')


const router = express.Router();
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));


// Handling a GET request to this file (eg: server.js) from browser
router.get('/' , (req,res) => {                   //Callback function
    res.send('hello express world!');
});

router.get('/auth',function(req,res){
    res.sendFile(path.join(__dirname+'/views/auth.html'));
  });


router.post('/auth', (req,res) => {
    console.log(req.body.username);
    res.send();
});

app.use('/', router);


module.exports = app;
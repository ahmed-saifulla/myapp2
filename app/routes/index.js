const express = require('express');
const app = express();
var bodyParser = require('body-parser')


const router = express.Router();
const path = require('path');

app.use(bodyParser.urlencoded({extended : true}));


// Handling a GET request to this file (eg: server.js) from browser
router.get('/' , (req,res) => {                   //Callback function
    // res.send('hello express world!');
    res.sendFile(path.join(__dirname+'/views/home.html'));
});

router.get('/auth',function(req,res){
    res.sendFile(path.join(__dirname+'/views/auth.html'));
});

router.post('/auth', (req,res) => {
    
    username = req.body.username;
    password = req.body.password;

    console.log('\n Login attempt by : \n ------------------------');
    console.log(`username :${username}`);
    console.log(`password :${password}`);

    res.send();
});

app.use('/', router);


module.exports = app;
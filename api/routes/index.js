var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("API is working properly");
});

router.get('/mail', function(req, res, next) {
    res.send("Mail Time");
});

router.post('/mail', function(req, res, next) {

    const name1 = req.body['name']
    const email1 = req.body['email']

    res.send(`Name is ${name1} and the email is ${email1}`);
    // res.send(name1)
});


module.exports = router;

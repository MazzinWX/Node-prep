var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
// Middleware to make /assets avaible everywhere
app.use('/assets', express.static('assets'));
// Middleware to parse data
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/contact', function (req, res) {
    res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);

    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 29, job: 'Ninja', hobbies: ['eating', 'fighting', 'fishing'] };
    res.render('profile', { person: req.params.name, data: data });
})

app.listen(3000);
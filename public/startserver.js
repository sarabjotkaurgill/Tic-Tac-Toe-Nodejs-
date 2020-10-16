var express = require("express");
var app = express();
var path = require("path");
var mysql = require('mysql');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
const {
    connect
} = require("http2");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tictactoe"
});

module.exports = con;

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/game.html'));
});
app.post('/', function (req, res) {

    var name1 = req.body.name1;
    var familyname1 = req.body.familyname1;
    var email1 = req.body.email1;
    var name2 = req.body.name2;
    var familyname2 = req.body.familyname2;
    var email2 = req.body.email2;

    // res.write('You sent the name1 "' + req.body.name1 + '".\n');
    // res.write('You sent the familyname1 "' + req.body.familyname1 + '".\n');
    // res.write('You sent the email1 "' + req.body.email1 + '".\n');
    // res.write('You sent the name2 "' + req.body.name2 + '".\n');
    // res.write('You sent the familyname2 "' + req.body.familyname2 + '".\n');
    // res.write('You sent the email2 "' + req.body.email2 + '".\n');
    fs.readFile("")
    var http = require('http'),
        fs = require('fs');


    fs.readFile('tictactoe.html', function (err, html) {
        res.write(html);
        res.end();
    });

    con.connect(function (err) {
        if (err) throw err;
        var sql = "INSERT INTO plyers (name1, familyname1, email1, name2, familyname2, email2) VALUES ('" + name1 + "', '" + familyname1 + "','" + email1 + "', '" + name2 + "','" + familyname2 + "','" + name2 + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.end();
        });
    });
    /* if (req.url == "/player1") {
         console.log('Player1 won')
         sendEmail(email1, 'You won!')
     } else if (req.url == "/player2") {
         console.log('Player2 won')
         sendEmail(email2, 'You won!')
     } else {
         console.log('Not won')
     }*/
})
app.listen(8080);
console.log("Running at Port 8080");

function sendEmail(email, message) {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'sarabjotkaurgill@yahoo.com',
            pass: 'isi1933536'
        }
    });

    var mailOptions = {
        from: 'sarabjotkaurgill@yahoo.com',
        to: email + '@yahoo.com',
        subject: 'Tic Tac Toe',
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
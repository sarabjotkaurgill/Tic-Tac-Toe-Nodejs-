/* var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
}); */

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE tictactoe", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tictactoe"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE plyers (id int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT, name1 VARCHAR(255), familyname1 VARCHAR(255), email1 VARCHAR(255), name2 VARCHAR(255), familyname2 VARCHAR(255), email2 VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});
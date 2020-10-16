'use strict'

let sign = document.getElementsByName('sign');
let sign1 = document.getElementById("sign1");
let sign2 = document.getElementById("sign2");
let cell = document.getElementsByClassName('cell')
let board = document.getElementById('board')
let scorePlayer1 = document.getElementById('score-player1')
let scorePlayer2 = document.getElementById('score-player2')
let playerEmail1 = document.getElementById("player-email1")
let playerEmail2 = document.getElementById("player-email2")
let score1 = 0;
let score2 = 0
let userSign = 'X';
let win = false;

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function () {

        //console.log(window.location.href)
        //console.log(window.location.href + "player1")

        if (cell[i].innerHTML == "") {
            cell[i].innerHTML = userSign;

            if (userSign == 'X') {
                userSign = 'O'
            } else {
                userSign = 'X'
            }

            if (cell[0].innerHTML == cell[1].innerHTML && cell[1].innerHTML == cell[2].innerHTML &&
                cell[0].innerHTML.trim() != "" && cell[1].innerHTML.trim() != "" && cell[2].innerHTML.trim() != "") {
                winner(0, 1, 2);
            } else if (cell[3].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[5].innerHTML &&
                cell[3].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "") {
                winner(3, 4, 5);
            } else if (cell[6].innerHTML == cell[7].innerHTML && cell[7].innerHTML == cell[8].innerHTML &&
                cell[6].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "" && cell[8].innerHTML.trim() != "") {
                winner(6, 7, 8);
            } else if (cell[0].innerHTML == cell[3].innerHTML && cell[3].innerHTML == cell[6].innerHTML &&
                cell[0].innerHTML.trim() != "" && cell[3].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "") {
                winner(0, 3, 6);
            } else if (cell[1].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[7].innerHTML &&
                cell[1].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "") {
                winner(1, 4, 7);
            } else if (cell[2].innerHTML == cell[5].innerHTML && cell[5].innerHTML == cell[8].innerHTML &&
                cell[2].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "" && cell[8].innerHTML.trim() != "") {
                winner(2, 5, 8);
            } else if (cell[0].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[8].innerHTML &&
                cell[0].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[8].innerHTML.trim() != "") {
                winner(0, 4, 8);
            } else if (cell[2].innerHTML == cell[4].innerHTML && cell[4].innerHTML == cell[6].innerHTML &&
                cell[2].innerHTML.trim() != "" && cell[4].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "") {
                winner(2, 4, 6);
            } else {
                draw();
            }
        }
        if (win == false) {
            draw();
        }
    })
}

function draw() {
    gameDraw()

    setTimeout(function () {
        if (cell[0].innerHTML.trim() != "" && cell[1].innerHTML.trim() != "" && cell[2].innerHTML.trim() != "" && cell[3].innerHTML.trim() != "" &&
            cell[4].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "" &&
            cell[8].innerHTML.trim() != "") {
            for (let i = 0; i < cell.length; i++) {
                cell[i].style.color = 'black'
                cell[i].innerHTML = ""
            }
            document.getElementById('msgWinner').innerHTML = ''
            board.style.pointerEvents = 'auto'
        }
    }, 1000);
}

function gameDraw() {
    win = false;
    if (cell[0].innerHTML.trim() != "" && cell[1].innerHTML.trim() != "" && cell[2].innerHTML.trim() != "" && cell[3].innerHTML.trim() != "" &&
        cell[4].innerHTML.trim() != "" && cell[5].innerHTML.trim() != "" && cell[6].innerHTML.trim() != "" && cell[7].innerHTML.trim() != "" &&
        cell[8].innerHTML.trim() != "") {
        document.getElementById('msgWinner').innerHTML = 'Game Draw'
        board.style.pointerEvents = 'none'
    }
}

function winner(a, b, c) {
    win = true
    cell[a].style.color = 'blue'
    cell[b].style.color = 'blue'
    cell[c].style.color = 'blue'
    if (userSign == 'X') {
        userSign = 'O'
        score2 += 1
        scorePlayer2.innerHTML = score2;
        if (scorePlayer2.innerHTML == '5') {
            document.getElementById('msgWinner').innerHTML = userSign + ' is Winner!'
            board.style.pointerEvents = 'none'
            sendEmail('Player2', 'You Win!')
            // window.location.href += "player2"
        }
    } else {
        userSign = 'X'
        score1 += 1
        scorePlayer1.innerHTML = score1
        if (scorePlayer1.innerHTML == '5') {
            document.getElementById('msgWinner').innerHTML = userSign + ' is Winner!'
            board.style.pointerEvents = 'none'
            sendEmail('Player1', 'You Win!')
            //window.location.href += "player1";
        }
    }

    if (scorePlayer1.innerHTML != 5 && scorePlayer2.innerHTML != 5) {
        setTimeout(function () {
            for (let i = 0; i < cell.length; i++) {
                cell[i].style.color = 'black'
                cell[i].innerHTML = ""
            }
        }, 1000);
    }
}

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
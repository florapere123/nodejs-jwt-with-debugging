var express = require('express'),
jwtVerifier = require('express-jwt'),
config      = require('../config'),
db          = require('../db');

var app = module.exports = express.Router();

var jwtCheck = jwtVerifier({
  secret: config.secretKey
});

function GetReportDataBySpec(done){
    db.get().query('SELECT * FROM ReportData', function(err, rows) {
        if (err) throw err;
        done(rows);
    });
}

function getPrivateQuotesDB(done){
    db.get().query('SELECT * FROM quotes WHERE private=1', function(err, rows) {
        if (err) throw err;
        done(rows);
    });
}

app.post('/api/ReportData/GetReportDataBySpec', function(req, res) {
    console.log(req);
    GetReportDataBySpec(function(result) {
      res.status(200).send(result);
  });
});

app.use('/api/private', jwtCheck);

app.get('/api/private/quote', function(req, res) {
  getPrivateQuotesDB(function(result) {
      res.status(200).send(result);
  });
});
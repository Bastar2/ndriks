const express = require('express');
const app = express();
const routesApp = require(__dirname+'/routes/routesApp.js');
const noSniff = require('dont-sniff-mimetype');
const path = require('path');

//SETTINGS
let port = process.env.PORT;
    if (port == null || port == "") {
    port = 5000;
    }

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/img', express.static(path.join(__dirname, '/img')));
app.use('/lista', express.static(path.join(__dirname, '/listaBebidas.json')));

app.use(allowCrossDomain);
app.use(noSniff());
app.use(routesApp);

app.listen(port, () => {
    console.log("Express server listening on port " + port ); 
} );

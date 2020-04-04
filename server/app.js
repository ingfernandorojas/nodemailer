const express = require('express');
const bodyParser = require('body-parser');
const configMessage = require('./mail-config.js');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://cv.usemoslinux.net');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {
    res.json({mensaje: 'La api esta funcionando'})
});

app.post('/formulario', (req, res) => {
    configMessage(req.body);
    res.status(200).send();
})

app.listen(3000, () => {
    console.log('Servidor corriendo')
});

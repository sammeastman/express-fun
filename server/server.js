const express = require('express');
const path = require('path');
let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, '../public')));



// app.get('/order/:name', (req, res) => {
//     let name = req.params.name;
//     let email = req.query.email;
//     res.send(`Your name is ${name} and email is ${email}`);
// });

app.use((req, res, next) => {
    console.log(req)
    next();
});

app.use(express.static('public'))

app.listen(3000);
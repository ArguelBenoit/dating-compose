const express = require('express');
const port = process.env.PORT || 3333;
const bodyParser = require('body-parser');
const router = require('sources/router').router;


// Instantiate server
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


// routes
server.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).send('<h1>On est bien là !</h1>');
});
server.use('/api', router);

// launch server
server.listen(port, () => {
    console.log(`Opened on http://localhost:${port}`);
});

const http = require('http');
const express = require('express');

const app = express();

app.use(
  '/',
  function (req, res, next) {
    console.log('Request:' + req.method, ' ', req.url);
    req.requestTime = Date.now();
    next();
  },
  function (req, res, next) {
    console.log('Druga funkcja middleware');
    next();
  }
);

app.get('/', (req, res) => {
  res.status(200).send('Hello World!" "requestTime:' + req.requestTime);
});

app.get(
  '/user/:id',
  function (req, res, next) {
    console.log('Request:' + req.method, ' ', req.url);
    req.requestTime = Date.now();
    if (req.params.id === '0' || req.params.id === '5') {
      next();
    } else {
      next('route');
    }
  },
  function (req, res, next) {
    res.send('brak dostępu!');
    next();
  }
);

app.get('/user/:id', (req, res) => {
  res
    .status(200)
    .send(
      'Hello World!" "requestTime:' + req.requestTime + 'id:' + req.params.id
    );
});

app.listen(8080, () => {
  console.log('Server started!');
});

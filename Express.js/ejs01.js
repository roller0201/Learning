const express = require('express');
const path = require('path');

const app = express();

const linksData = [
  { name: 'Home', url: '/' },
  { name: 'Article', url: '/articles' },
  { name: 'Google', url: 'https://google.com' },
];

const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.render('pages/home', {
    pageHeading: 'Strona www',
    pageTitle: 'Strona głowna',
    links: linksData,
  });
});

app.listen(8080, () => {
  console.log('Server started!');
});

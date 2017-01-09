var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
  console.log('Incoming ', req.method, ' request to ', req.url);

  // When a user visits '/'
  if (req.method === 'GET' && req.url === '/') {
    // Show a page that displays a title
    // and an image of your favorite actor or actress
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Bill Murray</h1>');
    res.write('<img src="http://www.fillmurray.com/100/100">');
    res.end();
  }
  // When a user visits '/about'
  if (req.method === 'GET' && req.url === '/about') {
    // Show an about page which displays
    // a short biography of that person
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>William James "Bill" Murray (born September 21, 1950) is an American actor, comedian, and writer</p>');
  }

  // When a user visits '/films/[name-of-film]'
  if (req.method === 'GET' && req.url.includes('/films')) {
    var films = {
      'caddyshack': {
        img: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSMfLvxKMKewiUFe4FGntapjxRcZKwnoNT2lLlUbYWmhPwH_oTI',
        title: 'Caddyshack'
      },
      'ghostbusters': {
        img: 'http://t3.gstatic.com/images?q=tbn:ANd9GcRJG5IBNzP5r0lNiVbjvc-V4ejuqDRWorvC9cAx8eBYQ4hb5eVY',
        title: 'Ghostbusters'
      },
      'groundhog-day': {
        img: 'http://www.gstatic.com/tv/thumb/movieposters/14569/p14569_p_v8_ah.jpg',
        title: 'Groundhog Day'
      },
      'lost-in-translation': {
        img: 'http://www.gstatic.com/tv/thumb/movieposters/32966/p32966_p_v8_ag.jpg',
        title: 'Lost in Translation'
      },
    }
    // Show a description of that film and the post
    // [ '', 'films', 'ghostbusters' ]
    var film = req.url.split('/')[2];
    console.log(film, films[film].img);
    var img = films[film].img;
    var title = films[film].title;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>' + title + '</h1>');
    res.write('<img src="' + img + '">');
    res.end();
  }
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});

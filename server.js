var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var routes = [
  { method: 'GET', path: '/', content: './index.html' },
  { method: 'GET', path: '/about', content: './about.html' },
  { method: 'GET', path: '/films/pitchblack', content: './films/pitchblack.html' }
];

var server = http.createServer(function(request, response) {
  var method = request.method;
  var url = request.url;
  console.log('Incoming ', method, ' request to ', url);
  var action = routes.find(function(route){
    return route.method === method && route.path === url;
  });
  if (action){
    fs.readFile( action.content, 'utf-8', function(err, data){
      if(err) throw err;
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write(data);
      response.end();
    });
  } else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/plain');
      response.write('uh oh, page not found');
      response.end();
    }
});

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});


var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res) {
  var url = req.url;
  var method = req.method;
  console.log('Incoming ', req.method, ' request to ', req.url);

    if ( method === 'GET' && url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        });
    }  else if ( method === 'GET' && url === '/about' ) {
            fs.readFile('./about.html', 'utf-8', function(err, data){
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write(data);
                res.end();
        });
        } else if ( method === 'GET' && url === '/films' ){
            fs.readFile('./films.html', 'utf-8', function(err, data){
                if (err) throw err;
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.write(data);
                res.end();
          });
          }
    });

server.listen(port, hostname, function() {
  console.log('Server running at http://' + hostname + ':' + port);
});


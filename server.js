// simple node server for night life coordination app

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if(req.url === '/') {
    fs.readFile('./html/index.html', function(err, html) {
      if (err) throw err;
      
      res.writeHeader(200, {"Content-Type": "text/html"});
      res.write(html);
      res.end;
    })
  }
})

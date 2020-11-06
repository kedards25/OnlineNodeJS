var http = require('http');
http.createServer (function (req, res) {
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<h2>Hello Server</h2>");
    res.end();
}).listen(8085);

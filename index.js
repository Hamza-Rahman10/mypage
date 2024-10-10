//my webPage App

var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is going to be MyWeb page!");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 

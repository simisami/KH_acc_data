var http = require('http');
var server = http.createServer ( function(request,response){

response.writeHead(200,{"Content-Type":"text\plain"});
if(request.method == "GET")
    {
        console.log(request.headers)
        response.end(request.headers)
        console.log("received GET request")
    }
else if(request.method == "POST")
    {
        response.end("received POST request.");
        console.log("received POST request")
    }
else
    {
        response.end("Undefined request .");
        console.log("Undefined request")
    }
});

server.listen(process.env.port);
console.log("Server running on port " + process.env.port);
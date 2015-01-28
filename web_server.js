// creating a server
var http = require("http");

var s = http.createServer(function(req, res) { // req = request (something), res = response (what gets returned)
	console.log("request received"); // this will appear in the console where node server was launched
	res.end("thanks"); // this terminates the connection
});

s.listen(8080); // open another powershell terminal or open a browser to http://localhost:8080/ to see the output of the res.end call
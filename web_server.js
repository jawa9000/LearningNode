// creating a server
var http = require("http");

function request_handler (req, res) { // req = request (something), res = response (what gets returned)
	console.log("request received"); // this will appear in the console where node server was launched
	var body = "Thanks for the request";
	console.log(body);
	var content_length = body.length;
	console.log(content_length);
	res.writeHead(200, { // output some headers
		'Content-Type': "text/plain",
		'Content-Length': content_length
	});
	res.end(body); // this terminates the connection
}

var s = http.createServer(request_handler);

s.listen(8080); // open another powershell terminal and type this: curl -X GET -i localhost:8080 or open a browser to http://localhost:8080/ to see the output of the res.end call
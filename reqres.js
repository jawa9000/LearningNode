var http = require("http");

function handle_incoming_request(req,res) {
	console.log("Incoming request: (" + req.method + ")" + req.url);
	
	console.log("/n/n/n");
	console.log(req);
	console.log("/n/n/n");
	console.log(res);
	console.log("/n/n/n");
	
	res.end("thanks for calling");
}

var s = http.createServer(handle_incoming_request);
s.listen(8080);

/*
 * HTTP Response Codes
 * 
 * 200 OK - everything went fine
 * 301 Moved Permanently - the requested URL has been moved
 * 400 Bad Request - the format of the client's request is invalid
 * 401 Unauthorized - the client has asked for something it does not have permission to view. It should try again authentictin the request first.
 * 403 Forbidden - for whatever reason, the server is refusing to process this request. This is not the same as 401.
 * 404 Not Found - the client has asked for something that does not exist.
 * 500 Internal Server Error - something happened resulting in the server being unable to process the request.
 * 503 Service Unavailable - this indicates some sort of runtime could try
 */

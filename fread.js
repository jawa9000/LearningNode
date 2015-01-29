// asynchronous call to load in a text file and print it out.

var fs = require('fs');

// open file
fs.open('test.txt','r', function(err,handle) {
	console.log("reading test.txt now.");
	var f = handle; // grab file
	var b = new Buffer(100000); // set up buffer
	
	fs.read(f, b, 0, 100000, null, function(err, bytes_read) {
		console.log(b.toString("utf8", 0, bytes_read)); // print file to console.log
		fs.close(f); // close file
	});
});

var temp;
fs.open('test.html','r', function(err,handle) {
	console.log("reading test.html now.");
	var f = handle;
	var b = new Buffer(100000);
	
	fs.read(f, b, 0, 100000, null, function(err,bytes_read) {
		temp = b.toString("utf8", 0, bytes_read);
		console.log(temp);
		fs.close(f);
	});
});


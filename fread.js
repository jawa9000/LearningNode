// asynchronous call to load in a text file and print it out.

var fs = require('fs');

// open file
var file = "test.txt";
fs.open(file,'r', function(err,handle) {
	if (err == null) { // if there's no error on opening the file
		console.log("reading " + file + " now.");
		var f = handle; // grab file
		var b = new Buffer(100000); // set up buffer
		
		fs.read(f, b, 0, 100000, null, function(err, bytes_read) {
			if (err == null) { // if there's no error on reading the file
				console.log(b.toString("utf8", 0, bytes_read)); // print file to console.log
			} else { // failed to read the file
				console.log("failed on read: " + err.code + " " + err.message);
			}
			fs.close(f); // close file
		});
	} else { // failed to open the file
		console.log("failed on open: " + err.code + " " + err.message);
	}
});

/*
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
*/
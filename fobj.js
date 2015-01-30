var fs = require("fs");

function FileObject() {
	this.filename = null;
	this.exists = function(callback) {
		var self = this; // by declaring a "global variable" within the class, 'this' can be passed to any other functions within this class
		console.log("attempting to verify " + this.filename);
		// 'this' is lost in the next function due to async oddities
		fs.open(self.filename, 'r', function(err, handle) {
			if (err) {
				console.log(self.filename + " doesn't exist.");
				callback(false);
			} else {
				console.log(self.filename + " exists.");
				callback(true);
				fs.close(handle);
			}
		});
	};
}

var fo = new FileObject();
//fo.filename = "test.txt"; // exists; true
fo.filename = "asdfasdfasdf"; // doesn't exist; false
fo.exists(function(doesItExist) {
	console.log("results from exist: " + doesItExist);
});

// quick and dirty method for reading in a file
var fs = require("fs");
var f = fs.openSync("test.txt","r");
var b = new Buffer(100000);
var readSoFar = fs.readSync(f, b, 0, 100000);

console.log(b.toString("utf8", 0, readSoFar));

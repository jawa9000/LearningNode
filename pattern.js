// basic recursion

var arr;
var results;

(function iterator(i) { // function to iterator over things
	if (i >= arr.length) { // if the end of the iterator has been reached, pass back the results to the array
		callback(null, results);
	} else { // 
		async_work(function(err, res) {
			if (err) {
				callback(err);
			} else {
				results.push(res);
				iterator(i + 1);
			}
		});
	}
})(0);

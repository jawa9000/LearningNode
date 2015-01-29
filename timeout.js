setTimeout(function() { // i'm in a waiting 'stack'
	console.log("i am done!");
},3000); // three seconds later, I execute

console.log("hello"); // I run before the setTimeout function

// arrays

// new node feature: isArray - determines if the object is an array or not (same as isNaN)

var myArray = [];
Array.isArray(myArray); // returns true even though it's empty
Array.isArray(21342); // false

myArray[myArray.length] = "mat"; // using the length value, add another string to the array
myArray.push("lat");

myArray[12] = "fat"; // adds the new string to the 12th position in the array and adds empty values inbetween as well

myArray.splice(2,1); // removes one element at the 2nd position

// case insentive sort
var names = ["marc","Maria","Alred","zimbu"];
names.sort(function(a,b) { // pass in function
	var a1 = a.toLowerCase();
	var b1 = b.toLowerCase();
	if (a1 < b1) {
		return -1;
	} else if (a1 > b1) {
		return 1;
	} else {
		return 0;
	}
});

//forEach function for arrays
names.forEach(function (value) {
	console.log(value);
});


// functions
// parameters are not validated in functions (unless it's written that way)
function hello() {
	console.log(arguments);
}
hello("brian",true,234,523); 
// returns {'0': 'brian','1':true,'2':234,'3':523}

// 1. () -- use default values
// 2. (number) -- cache size only
// 3. (object) -- we'll use those instead

function init_cache() {
	var init_data = {
		cache_size: 10, //mb
		location: "/tmp",
		type: "btree"
	};
	
	var a = arguments;
	for (var i = 0; i < a.length; i++) {
		if (typeof a[i] == 'number') {
			init_data.cache_size = a[i];
		} else if (typeof a[i] == 'object') {
			init_data = a[i]; // could be written to handle each item passed in the object
		} else {
			throw new Error("bad params to init_cache");
		}
	}
}

// the init_cache function is flexible enough to 
init_cache(); // no variables passed; use defaults
init_cache(100); // one variable passed; adjust value for cache_size
init_cache({
	cache_size: 50, // adjust value for cache_size
	location: "/var", // adjust value for location
	type: "avltree" // adjust value for type
});

// nameless/anonymous function
var x = function(a,b) { return a + b; };
x(2,3); // returns 5
// this is problematic when trying to debug as the function is nameless
// when this function errors, the debugger won't know the name of the function

// named anonymous function
var x = function functioName() { throw new Error("boo");};
x(); // returns error message but with the name of the erroring function

// function scope
var pet = "cat"; // global variable
function playingWithPets() {
	var pet = "dog"; // private variable
	console.log(pet); // returns dog
}

playWithPets(); // returns dog
pet; // returns cat

var height = 5;
var radius = 3;
var volume;
(function() {
	var pir2 = Math.PI * radius * radius;
	volume = pir2 * height / 3;
})(); // call function immediately
volume; // returns 47.12388....


// language constructs
234 == '234'; // true
234 === '234'; // false (different types)
'' == false == null == undefined == 0; // true
null == undefined; // true
null === undefined; // false

var x = new Number(234);
x == 234; // true
typeof x; // 'object'
x === 234; // false

var today = true;
var x = today ? "cat" : "dog";
// if x == today then x = cat, else x = dog;
x; // returns 'cat'

var user = {
	fn: "brian",
	ln: "immel",
	bd: "1/28/72"
};

for (key in user) {
	console.log(key);
} // returns the keys 'fn','ln', and 'bd'
for (i in user) {
	console.log(user[i]);
} // returns 'brian','immel', and '1/28/72'
for (i in user) {
	console.log(i,user[i]);
} // returns a combination of both for loop values listed above


// prototypes and inheritance

function Shape() { // new class; classes usually start with a capital letter
	this.X = 0;
	this.Y = 0;
	
	this.move = function(x,y) {
		this.X = x;
		this.Y = y;
	};
	
	this.distanceFromOrigin = function() {
		return Math.sqrt(this.X * this.X + this.Y * this.Y);
	};
}

var s = new Shape();
s.move(10,10);
console.log(s.distanceFromOrigin());

// prototypical inheritance
function Shape() { // create empty class
}

Shape.prototype.X = 0; // member variable for Shape
Shape.prototype.Y = 0; // member variable for Shape

Shape.prototype.move = function (x,y) { // method for Shape
	this.X = y; // collect input value
	this.Y = y; // collect input value
};

Shape.prototype.distanceFromOrigin = function() { // method for Shape
	return Math.sqrt(this.X * this.X + this.Y * this.Y);
};

Shape.prototype.area = function() { // method for Shape
	throw new Error("Need a 2d form!");
};

var s = new Shape();
s.move(10,10);
console.log(s.distanceFromOrigin());

function Square() {}
Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype; // inherit everything from Shape prototype
Square.prototype.Width = 0;

Square.prototype.area = function() {
	return this.Width * this.Width;
};

function Rectangle() {}
Rectangle.prototype = new Square();
Rectangle.prototype.__proto__ = Square.prototype; // inherit everything from Square class
Rechangle.prototype.height = 0;

Rectangle.prototype.area = function() { // new are method
	return this.Width * this.Height;
};

var re = new Rectangle();
re.move(-5, -5);
re.Width = 15;
re.Height = 2;
console.log(re.distanceFromOrigin());
console.log(re.area());

var sq = new Square();
sq.move(5,5);
sq.Width = 15;
console.log(sq.distanceFromOrigin());
console.log(sq.area());

console.log(sq instanceof Square);
console.log(sq instanceof Shape);
console.log(sq instanceof Rectangle);
console.log(re instanceof Square);
console.log(re instanceof Shape);

// my prototype class
function Cheese() {}

Cheese.prototype.Size = 0;
Cheese.prototype.Age = 0;

Cheese.prototype.bigness = function(size,age) { // bring in the variables from the class function call
	this.Size = size;
	this.Age = age;
};

Cheese.prototype.something = function() {
	return this.Size * this.Age;
	
};

var cheese = new Cheese();
cheese.bigness(2,3);
console.log(cheese.something());

// one more prototype class for me
function Rage() {}

Rage.prototype.Amount = 0;
Rage.prototype.Intensity = 0;

Rage.prototype.rowr = function(amount,intensity) {
	this.Amount = amount;
	this.Intensity = intensity;
};

Rage.prototype.yell = function() {
	return this.Amount * (this.Intensity * this.Intensity);
};

var rage = new Rage();
rage.rowr(2,5);
console.log(rage.yell());


// error handling
function uhoh() {
	throw new Error("Badddd!!!");
}
try {
	uhoh();
} catch(e) {
	console.log("I got an error: " + e.message);
}


// Important Node globals

// global.<something>

function printAGlobal(name) {
	console.log(global[name]);
}

global.fish = "gold";
global.pet = "cat";
printAGlobal("fish");
printAGlobal("pet");

// process.exit(-1); // kill node altogher
// process.<something>

function Dog(name) {
	this.name = name;
	this.stomach = [];	
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

Dog.prototype.sayHi = function() {
	console.log('Hi! I am a Dog. My name is ' +  this.name);
};

module.exports = Dog;
function Animals(name) {
	this.name = name;

}

function Cats(name, howManyLegs) {
	Animals.apply(this, arguments);
	this.howManyLegs = howManyLegs;
}

Cats.prototype = Object.create(Animals.prototype);
Cats.prototype.constructor = Cats;

const cat = new Cats('Bob', 4);

console.log(cat.name);
console.log(cat.howManyLegs);
console.log(cat instanceof Animals);
// TODO: convert the es5 constructors to classes


// Super class
function Character(name, stats) {
  this.name = name;
  this.type = stats.type;
  this.health = stats.health;
  this.power = stats.power;
}

Character.prototype.attack = function() {
  console.log(this.name + ' is attacking!');
  console.log('Dished out ' + this.power + ' damage!');
}

// Subclass
function Scout(name, stats){
  stats.type = 'scout';
  Character.call(this, name, stats);
}

// Subclass is extending super class
Scout.prototype = Object.create(Character.prototype);
Scout.prototype.searchForEnemies = function() {
  console.log(this.name + ' is searching for enemies!');
  var random = Math.floor((Math.random() * 7) + 1);
  console.log('...spotted ' + random + ' enemies');
};

// super call
Scout.prototype.attack = function() {
  console.log('Adjusting scope...');
  Character.prototype.attack.call(this);
};

Scout.prototype.constructor = Scout;

var name = 'Reaper';
var scout = new Scout(name, {health: 23, power: 67});
console.log(name + ' is instance of Character ', scout instanceof Character);

scout.searchForEnemies();
scout.attack();
/*******************************************/


function FancyArray() {
  Array.call(this, arguments);
  this.count = arguments.length;
  // static method
  this.toString = function() {
    return '[FancyArray array]';
  };
}

FancyArray.prototype = Object.create(Array.prototype);

FancyArray.prototype.last = function() {
  return this[this.length - 1];
};

var array = new FancyArray();
array.push(1, 2, 3, 4, 5, 6, 7);

console.log(array.last());
console.log(array.toString());

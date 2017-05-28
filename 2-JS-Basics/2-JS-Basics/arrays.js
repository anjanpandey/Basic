/////////////////////////////////////
//Arrays

var names = ['John', 'Jass', 'Merry', 'Mark'];
var years = new Array(1991, 1992, 1995, 1997);

console.log(names);
console.log(names[1]);

names[1] = 'Jasmin'; //mutation 
console.log(names);

//mix array

var john = ['John', 'Smith', 1990, 'engineer', false];

john.push('Blue'); //add elements at the end. 
john.unshift('Mr.'); //add elements at the beginning 
john.pop(); //remove from the end, no paramater passed and return it.
john.shift(); //removes from the beginning 

john.indexOf('Smith'); //returns the position of the element that we passed into it. 
//if element is not in the array, it returns -1. 
console.log(john);


if (john.indexOf('teacher') != -1) {
    console.log('He is a teacher.')
} else {
    console.log('He is not a teacher.');
}

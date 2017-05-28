//by Anjan Pandey

/*
Declaring variables
*/

/*
var firstName = 'Anjan';
var lastName = 'Pandey';

console.log(firstName + ' ' + lastName);


var age = 23;
console.log(age);

var fullAge = true;

console.log(fullAge);


//lecture variable 2

var name = 'Anjan';
var age = 23;

console.log(name + ' ' + age);
console.log(age+age); 

var job, isMarried; 

job = 'Software Engineer';
isMarried = false; 

console.log(job);
console.log(isMarried);

//var major = prompt('What is your major?');
//console.log(major);

alert('Are you sure you want to exit?');



//lECTURE: Operators
var thisYear = 2017;
var age = 23;
var birthYear = thisYear - age;
birthYear = thisYear - age * 2; //first does multiplication and then subtraction! 

console.log(birthYear);

age++;
console.log(age);

*/

//if-else statement

var name = 'John';
var age = 19;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' ' + 'is married.');
} else {
    console.log('He is not married!');
}

isMarried = true;

if (isMarried) {
    console.log('He is married!');
} else {
    console.log('He is not married!');
}

if (isMarried && age >= 25) {
    console.log('He can marry now!');
} else if (isMarried && age <= 20) {
    console.log('He is too young to get married');
} else {
    console.log('He is not married!');
}

// == type conversion 23 == "23"
// === comparision only not type conversion

var job;
job = prompt("What is your job?");

switch (job) {
    case 'teacher':
        console.log('He is a teacher.');
        break;
    case 'driver':
        console.log('He is a driver.');
        break;
    case 'cop':
        console.log('He is a cop.');
        break;
    default: //this is same as else 
        console.log('He is something else.');
}

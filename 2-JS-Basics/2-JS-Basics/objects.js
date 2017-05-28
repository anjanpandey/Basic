///////////////////////////////////////
//lectures: Objects
////////////////////////////////////

//var arr = [1,2,3];
//arr[0]; 

//object: no order defined, give each member a aspecific name


/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.job);
console.log(john['lastName']);

var xyz = 'yearOfBirth';
console.log(john[xyz]);

//Data Mutation 

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

//Another way of creating an object 
var jass = new Object();
jass.firstName = 'Jasmine';
jass.lastName = 'Smith';
jass['yearOfBirth'] = 1992;
jass['job'] = 'Designer';
jass.isMarried = true;

console.log(jass);
*/

//v1.0
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        return 2017 - this.yearOfBirth; //this means john 
    }
};


console.log(john.family);
console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge(); 
john.age = age; 

console.log(john);
*/

//v2.0
var john = {
    firstName: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        this.age = 2017 - this.yearOfBirth; //this means john 
    }
};
john.calculateAge();
console.log(john);


var mike = {
    firstName: 'Mike',
    lastName: 'Miller',
    yearOfBirth: 1993,
    isMarried: true,
    calculateAge: function () {
        this.age = 2017 - this.yearOfBirth; //this means mike
    }
};
mike.calculateAge();
console.log(mike);

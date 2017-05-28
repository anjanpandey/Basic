//Lecture: Functions

function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageA = calculateAge(1993);
var ageB = calculateAge(1998);

console.log(ageA);
console.log(ageB);



function yearsUntilRetirement(name, yearOfBirth) {

    var age = calculateAge(yearOfBirth);
    var retirementAge = 70 - age;

    if (retirementAge > 0) {
        console.log(name + ' retires in ' + retirementAge + ' years.');
    } else if (retirementAge < 0) {
        console.log('Already retired!!!!');
    } else {
        console.log('About to retire!');
    }

}

yearsUntilRetirement('A', 1844);
yearsUntilRetirement('B', 1988);
yearsUntilRetirement('C', 1947);

function eatCandy(name, birthYear) {

    var age = calculateAge(birthYear);

    if (age < 17 && age > 6) {
        console.log(name + ', You may eat a candy!');
    } else if (age <= 6) {
        console.log(name + ', too young to eat a candy!');
    } else {
        console.log(name + ', too old to eat a candy!');
    }
}

eatCandy('Kaith', 2014);
eatCandy('John', 1994);
eatCandy('Roffa', 2001);

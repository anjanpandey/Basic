//Coding Challenge 1  

var ageA, ageB, ageC, heightA, heightB, heightC, totalA, totalB, totalC;

ageA = prompt('Enter your age');
heightA = prompt('Enter your height in centimeters');
ageB = prompt('Enter your age');
heightB = prompt('Enter your height in centimeters');
ageC = prompt('Enter your age');
heightC = prompt('Enter your height in centimeters');

totalA = heightA + (5 * ageA);
totalB = heightB + (5 * ageB);
totalC = heightC + (5 * ageC);

if (totalA > totalB && totalA > totalC) {
    console.log('A is a winner! with total points of ' + totalA + '.');
} else if (totalB > totalA && totalB > totalC) {
    console.log('B is a winner! with total points of ' + totalB + '.');
} else if (totalC > totalA && totalC > totalB) {
    console.log('C is a winner! with total points of ' + totalC + '.');
} else {
    console.log('Winner cannot be decided!');
}

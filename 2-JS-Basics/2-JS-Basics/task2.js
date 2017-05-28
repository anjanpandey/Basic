// coding challenge 2 

function printFullAge(years) {

    var empty = [];
    var fullAge = [];

    for (var i = 0; i < years.length; i++) {
        var age = 2017 - years[i];
        empty.push(age);
    }

    for (var j = 0; j < empty.length; j++) {

        if (empty[j] > 18 && empty[j] <= 90) {
            console.log('The person is ' + empty[j] + ' of full age.');
            fullAge.push(true);
        } else if (empty[j] <= 18) {
            console.log('The person is ' + empty[j] + ' very young.');
            fullAge.push(false);
        } else {
            console.log('The person is ' + empty[j] + ' too old.');
            fullAge.push(true);
        }
    }

    return fullAge;
}


var years = [1990, 1977, 1988, 2005, 1917];
var result1 = printFullAge(years);
var result2 = printFullAge([2011, 1955, 1967]);


/*
for (var i = 0; i < years.length; i++) {
    var age = 2017 - years[i];
    empty.push(age);

    if (empty[i] > 18 && empty[i] <= 90) {
        return true;
    } else {
        return false;
    }

}
}
var result1 = new Array(printFullAge([1965, 2008, 1992]);
var result2 = new Array(printFullAge([1975, 2003, 1982]);
console.log(result1);
console.log(result2);
*/

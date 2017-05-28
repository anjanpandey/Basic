/////////////////////////////////////
//lecture: loops

/*
for(var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['An', 'Bob', 'Cezz', 'Dilly', 'Elizer'];

for (var i=0; i<names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length-1; i>=0;i--) {
    console.log(names[i]);
}
 
*/
//while loops

var names = ['An', 'Bob', 'Cezz', 'Dilly', 'Elizer'];
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var k = 1; k <= 5; k++) {
    if (k === 3) {
        break; //stops the loop 
        //doesnot print anything after this  
    }
    console.log(k);
}

for (var k = 1; k <= 5; k++) {
    if (k === 3) {
        continue; //start the loop with the next value 
        //doesnot print anything when k = 3 
    }
    console.log(k);
}

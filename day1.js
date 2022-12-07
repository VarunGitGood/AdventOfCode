// PART 1
var fs = require('fs');
let  input = fs.readFileSync('day1.txt', 'utf8');
input = input.split('\n');
input = input.map((x) => {
    if(x === '') return 0;
    return parseInt(x);
});
let sum = 0;
let max = -99999999999;
input = input.forEach((x) => {
    if(x == 0){
        if(sum>max){
            max = sum;
        }
        sum = 0;
    }
    else {
        sum += x;
    }
});
console.log(max);

// PART 2
input = fs.readFileSync('day1.txt', 'utf8');
input = input.split('\n\n');
input = input.map((x) => {
    return x.split('\n').map((y) => {
        return parseInt(y);
    }).reduce((a,b) => {
        return a+b;
    });
});
input.sort((a,b) => {
    return b-a;
});
console.log(input[0]+input[1]+input[2]);


const prompt = require('prompt-sync')();


let max_num = prompt("Enter a number:  ");


let num = 0;
let num2 = 1;
let current_num = 0;

let counter = 2;

console.log(num);
console.log(num2);

while(counter<max_num)
{
    current_num = num+num2;
    console.log(current_num);
    num = num2;
    num2 = current_num;
    counter++;
}

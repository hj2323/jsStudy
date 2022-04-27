let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let output =0;
for (let num of array){
if (output >0){
break;
}
if(num % 2 == 0){
continue;
}
output += num;
}
console.log(output);
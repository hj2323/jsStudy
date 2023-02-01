
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

const array1 = [1,4,9,16];
const map1 = array1.map(x=>x*2);
console.log(map1);



[구조분해]
function solution(dot){
	const [num1, num2] = dot;
	const check = num1 * num2 >0;
	return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}

[배열 reverse]
array.reverse()


[스프레드 문법]
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}

function solution(my_string) {
    const arr = Array.from(my_string);
    var rearr = arr.reverse();
    var answer = arr.toString();
    answer = answer.replaceAll(",", "");
    return answer;
}


[filter]
const solution = (n) => Array.from({ length: n }, (_, i) => i + 1) 
			. filter(i => i % 2 !== 0)
function solution(array, n) {
	return array.filter(v=>v===n).length;
}


function solution(s1, s2){
	const intersection = s1.filter((x) => s2.includes(x));
	return intersection.length;
}


[sort]
sides = sides.sort((a,b) => a-b)
return sides[0]+sides[1] > sides[2] ? 1:2;


[get median value]
function solution(array) {
 return array.sort((a,b) => a-b)[Math.floor( array.length / 2)];	
}


[정수의 자릿수 더하기]
function solution(n) {
    var answer = 0;
    var n = [...n.toString()];
    for(i=0;i<n.length;i++){
        answer += Number(n[i]);
    }
    return answer;
}

function solution(n) {
   return n
	.toString()
	.split("")
	.reduce((acc, cur) => acc + Number(cur), 0);
}


[substring; 부분문자열]
str1.includes(str2) ? 1:2;
str1.indexOf(str2) !== -1 ? 1:2;


[제곱수 판별]
function solution(n) {
    var measure = [];
    var answer = 2;
    for(i=1;i<=n;i++){
        if(n%i == 0) measure.push(i);
    }
    for(i=0;i<measure.length;i++){
        if(measure[i]*measure[i] == n) answer = 1; 
    }
    return answer;
}

function solution(n) {
   return Number.isInteger(Math.sqrt(n)) ? 1:2
}

[sum of hidden number in array]
function solution(my_string) {
    var arr = [...my_string];
    var numarr = [];
    for(i=0;i<arr.length;i++){
        if(!isNaN(arr[i])) numarr.push(arr[i]);
    }
    return sum = numarr.reduce((sum, cur) => sum + Number(cur), 0);

}

// filter & isNaN
function solution(my_string) {
	return my_string.split("").filter((v) => !isNaN(v)).reduce((sum,cur) => parseInt(sum) + parseInt(cur));
}

//구조식
function solution(my_string) {
	return my_string.match(/[0-9]/g).reduce((sum, cur) => parseInt(sum) + parseInt(cur));
}


[문자도 정규표현식 가능]
function solution(my_string) {
	return my_string.replace(/[aeiou]/g, '');
}


[대문자와 소문자]
function solution(my_string) {
    //toUpperCase() toLowerCase()
    var arr = my_string.split("");
    for(i=0;i<arr.length;i++){
        arr[i] == arr[i].toUpperCase() ? arr[i] = arr[i].toLowerCase() : arr[i] = arr[i].toUpperCase();
    }
    return arr.join("");
}

function solution(my_string) {
	var answer ='';
	for(let c of my_string) // check!!
		answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
	return answer;
}
****************************************
***try to consciously use 'map'********
****************************************
function solution(my_string) {
	return my_string.split('').map(n=> n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('');
}	

[암호 해독]
function solution(cipher, code) {
    var answer = [];
    var arr = cipher.split("");
    for(i=0;i<arr.length;i++){
        if(i%code === (code-1)){
            answer.push(arr[i]); 
        } 
    }

    return answer.join("");
}

function solution(cipher, code) {
	var answer = "";
	for(let i = code -1; i<cipher.length; i+= code) { //check length of string!!
		answer += cipher[i];
	}
	return answer;
}


[입출력input & output]
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
var output = '*';

rl.on('line', function (line) {
    input = line.split(' ');
    input = Number(input[0]);
}).on('close', function () {
    for(i=0;i<input;i++)  
     console.log(output.repeat(i+1));
});


const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on('line', function (line) {
	input = line.split('');
}).on('close', function () {
	solution(Number(input[0]));
});

function solution(n) {
	for(let i=1; i< n+1; i++){
		console.log('*'.repeat(i));
	}
}

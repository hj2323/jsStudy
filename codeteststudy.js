
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

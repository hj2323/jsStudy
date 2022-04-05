// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(',');
    console.log(result);
}
// Q2. make a array out of an string
{
    const fruits = 'apple, kiwi, banana, cherry';
    const result = fruits.split(',');
    console.log(result);
}
// Q3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];    
    const result = array.reverse();
    console.log(result);
    console.log(array); //array도 같이 reverse 된다
}
// Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];    
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) =>  student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
{
    //callback함수로 전달된 인자는 최대한 이해하기 쉽게 쓰는 게 좋다
    const result = students.map((student) => student.score);
    console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
    
}
// Q9. compute students' average score
{

}

// Q10. make a string containing all the scores
// result should be: ' 45,80,90,66,88'
{

}
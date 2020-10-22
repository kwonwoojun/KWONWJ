// variable.js
let var1 = 10;
var1 = 'hello';
var1 = 20;
console.log(typeof var1);

const var2 = '20';

let num1 = 10;
let num2 = '10';
// === 값만 체크
if (num1 == num2) {
    console.log('same');
    } else {
    console.log('diff');
    }  

// === 값과 타입 둘다 체크
if (num1 === num2) {
    console.log('same');
    } else {
    console.log('diff');
    }   

let trueOrFalse = true;
if(trueOrFalse) {
    console.log(true);
}

num2 = 'hello';
let num3;
if(num3) {
    console.log(true);
} else {
    console.log(false);
}
console.log(typeof num3);

let person = {
    name: 'Hong',
    age: 20,
    score: 80
}

person.hobby = 'reading';

console.log(person);
console.log(person.age);


let persons = [person, {name: 'Hwang', age: 25, score: 90}];


console.log(persons[0].score, persons[1].score);

persons.push({
    name: 'Choi',
    age: 27,
    score: 100,
});

console.log('persons length: ' + persons.length);

// for(let i = 0; i<persons.length; i++) {
    for(let per of persons) {
    console.log(per.name + ',' + per.age + ',' + per.score);

}

let show = document.getElementById('show');
let ul = document.createElement('ul');


for(let i=0; i<persons.length; i++) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = persons[i].name + " "+ persons[i].age + " "+ persons[i].score;
   
}

show.append(ul);

for(per of persons) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = per.age;
    li.innerHTML = per.name + " "+ per.age + " "+per.score;
}

show.append(ul);

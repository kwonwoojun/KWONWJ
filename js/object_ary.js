// object_ary.js
let apples = ['apple'];

apples[apples.length] = 'banana';
apples[apples.length] = 'mango';

apples.push('melon')
apples.push('strawberry')

apples.unshift('grape');
// 맨뒤에 제거
apples.pop();
apples.pop();
// 맨앞에서 제거
apples.shift();

// delete apples[1];
apples.splice(1,1,'new apple', 'new mango'); // index: 1에서 하나 삭제

for (let fruit of apples) {
    console.log(fruit);
}

let fruits = ['apple','banana', 'mango', 'melon', 'grape'];
let newFr = fruits.slice(0,3);
console.log(fruits);
console.log(newFr);

for (let i = 0; i < fruits.length; i++) {
    
}
for (let fruit of fruits) {

}
console.clear();

// 배열에서 사용
let tags = '<ul>';
fruits.forEach(function (a,b,c) {   //첫번째(요소), 두번째(인덱스), 세번째(배열)
    tags += '<li>' + a + '</li>';
});
tags += '</ul>';
console.log(tags);

let newBtn = document.getElementById('new');
newBtn.innerHTML += tags;

let intAry = [3,5,2,6,4,8,6];
let sum = 0;
for(i of intAry) {
    sum += i;
}
sum = 0;
sum2 = 0;
sum3 = 0;
intAry.forEach(function (c,b,d) {
    sum += c;
    // sum2 += b;
    // sum3 += d;
});
console.log(sum,sum2,sum3);

let per1 = {
    name: 'Hong',
    age: 20,
    hobby: 'reading',
    grade: 'A' 
}

let per2 = {
    name: 'Hwong',
    age: 25,
    hobby: 'sleeping',
    grade: 'B' 
}
let per3 = {
    name: 'kang',
    age: 30,
    hobby: 'running',
    grade: 'C' 
}
let name = per1.name;
name = per1['name'];
let age = per1['age'];

function getField(obj, field) {
    return obj[field];
}
name = getField(per1, 'name');
age = getField(per1, 'age');

for(field in per1) {
    console.log(field);
}

console.log(age);

let persons = [per1, per2, per3];

let newTag = '<table border=1>';
for (person of persons) {
    newTag += '<tr>';
    for (field in person) {
        if ( field == 'name') {
        newTag += '<td style="color: red;">' + person[field] + '</td>';
        } else if (field == 'age') {
            newTag += '<td style="font-weight: bold;">' + person[field] + '</td>';
        } else {
            newTag += '<td>' + person[field] + '</td>';
        }
    }
    newTag += '<td><button class = "btn">OK</button></td></tr>'
}

newTag += '</table>';
newBtn.innerHTML = newTag;
// css의 선택자 방식으로 클래스명이 btn인 요소를 가지고 옴.
let btn = document.querySelectorAll('.btn');
console.log(btn);

for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        let trTag = this.parentNode.parentNode;
        trTag.style.background = 'yellow';
      
    }
}

// getElementsByTagName메소드로 tr로 찾아온다.
let trs = document.getElementsByTagName('tr');
for (let i = 0; i < trs.length; i++) {
    trs[i].onmouseover = function () {
        this.style.background =  'cyan';
       }
    trs[i].onmouseout = function () {
        this.style.background =  '';
       }
}


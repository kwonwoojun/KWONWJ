// array.js

let intAry = [34, 52, 58, 22, 19, 30];

// 1. index를 활용해서 총합.
let sum = 0;
for(let i=0; i<intAry.length; i++) {
    sum += intAry[i];
    
} console.log(sum);

// 2.확장 for를 활용. for ... of ..
let sum2 = 0;
for(ary of intAry) {
    sum2 += ary;
    
} console.log(sum2);

// 3. 숫자 리스트를 document영역에 리스트로 보여주세요. ul. li
let show = document.getElementById('show');
let ul = document.createElement('ul');

for(ary of intAry) {
    let li = document.createElement('li');
    ul.append(li);
    li.innerHTML = ary;
}   

show.append(ul)

// 4. 숫자 35,88을 배열의 마지막 위치에 추가.
intAry.push(
    35,
    88   
);

let li = document.createElement('li');
ul.append(li);
li.innerHTML = intAry[6];
li = document.createElement('li');
ul.append(li);
li.innerHTML = intAry[7];






// 5. 합을 리스트의 마지막에 보여주세요. 합계: 235
sum = 0;
for (ary of intAry) {
    sum = sum + ary;
}
console.log(sum);

li = document.createElement('li');
ul.append(li);
li.innerHTML = sum;

sum = 0;
for (ary of intAry) {
    sum += ary;
}
console.log(sum);

li = document.createElement('li');
ul.append(li);
li.innerHTML = sum;






// let p1 = {
//     name: 'hong',
//     age: 15
// }
// let p2 = {
//     name: 'hwong',
//     age: 20
// }
// let p3 = {
//     name: 'honddg',
//     age: 22
// }
// let persons = [];
// persons.push(p1);
// persons.push(p2);
// persons.push(p3);
// console.log(persons);

// //
// let tableTag = '<table border=1>';
// tableTag += '<tr><th>이름</th><th>나이</th></tr>';
// for( let p of persons) {
//     tableTag +='<tr><td>' + p.name + '</td><td>' + p.age + '</td></tr>'
// }
// tableTag += '</table>';
// console.log(tableTag);
// let show = document.getElementById('show');
// show.innerHTML = tableTag;
// //

// //
// show = document.getElementById('show');
// let ul = document.createElement('ul');

// for(per of persons) {
//     let li = document.createElement('li');
//     ul.append(li);
//     li.innerHTML = per.name;
// }   
// show.append(ul);
// //


// //
// show = document.getElementById('show');
// ul = document.createElement('ul');

// for(per of persons) {
//     let li = document.createElement('li');
//     ul.append(li);
//     li.innerHTML = per.age;
// }

// show.append(ul);
// //

// //
// show = document.getElementById('show');
// let table = document.createElement('table');
// table.setAttribute("border", "1");
// let tr = document.createElement('tr');
// let th = document.createElement('th');
// tr.append(th);
// th.innerHTML = '이름';
// th = document.createElement('th');
// tr.append(th);
// th.innerHTML = '나이';
// table.append(tr);


// for(per of persons) {
//     let td = document.createElement('td');
//     let tr = document.createElement('tr');
//     tr.append(td);
//     td.innerHTML = per.name
//     td = document.createElement('td');
//     tr.append(td);
//     td.innerHTML = per.age
//     table.append(tr);
// }
// show.append(table);
// //

// show = document.getElementById('show');
// table = document.createElement('table');
// table.setAttribute("border", "2");
// tr = document.createElement('tr');
// th = document.createElement('th');
// tr.append(th);
// th.innerHTML = '이름';
// th = document.createElement('th');
// tr.append(th);
// th.innerHTML = '나이';
// table.append(tr);

// for(per of persons) {
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
//     tr.append(td);
//     td.innerHTML = per.name;
//     td = document.createElement('td');
//     tr.append(td);
//     td.innerHTML = per.age;
//     table.append(tr);
// }

// show.append(table);





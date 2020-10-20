// opacity.js
// <div>hello</div>
let divTag = document.createElement('div');
divTag.setAttribute('class','background');

let divBox = document.createElement('div');
divBox.setAttribute('class', 'box');

let pTag = document.createElement('p');
pTag.innerHTML = 'HTML5 웹 프로그래밍';

divTag.append(divBox);
divBox.append(pTag);

console.log(divTag);

let bdy = document.querySelectorAll('#bdy');
console.log(bdy);

bdy[0].append(divTag);
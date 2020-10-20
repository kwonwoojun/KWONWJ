let divTag = document.createElement('div');
divTag.setAttribute('class','v1');

let img = document.createElement('img');
img.setAttribute('src','../images/pic1.jpg');


let divTag2 = document.createElement('div');
divTag2.setAttribute('class', 'v2');

let img2 = document.createElement('img');
img2.setAttribute('src','../images/pic1.jpg');

let divTag3 = document.createElement('div');
divTag3.setAttribute('class', 'v3');

let img3 = document.createElement('img');
img3.setAttribute('src','../images/pic1.jpg');

let divTag4 = document.createElement('div');
divTag4.setAttribute('class', 'v2');

let img4 = document.createElement('img');
img4.setAttribute('src','../images/pic1.jpg');

 divTag.append(img);
 divTag2.append(img2);
 divTag3.append(img3);
 divTag4.append(img4);


// console.log(divTag);


let bdy = document.querySelectorAll('#bdy');
// let bdy = document.getElementById('bdy'); 

bdy[0].append(divTag, divTag2, divTag3, divTag4);

let divTag5 = document.createElement('div');
divTag5.setAttribute('class','row');
let ulTag = document.createElement('ul');
ulTag.setAttribute('id','first');
let liTag = document.createElement('li');
liTag.innerHTML = 'menu1';
let liTag2 = document.createElement('li');
liTag2.innerHTML = 'menu2';
let liTag3 = document.createElement('li');
liTag3.innerHTML = 'menu3';






ulTag.append(liTag, liTag2, liTag3);
divTag5.append(ulTag);


bdy[0].append(divTag5);





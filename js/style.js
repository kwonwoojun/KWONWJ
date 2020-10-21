let div1 = document.createElement('div');
div1.setAttribute('class','row');
div1.innerHTML = 'Lorem ipsum dolor sit amet consectetur';

console.log(div1);

let bdy = document.getElementsByTagName('body');
console.log(bdy);
bdy[0].append(div1);

// object.js

// js에서는 ()이 실행.

let person1 = {
    firstName: 'kildong',
    lastName: 'Hong',
    age: 15,
    setName: function(name) {
        this.fistname = name;
    },
    fullName: function() {
        return this.firstName + ', ' + this.lastName;
    }
}

person1.firstName;
console.log(person1.lastName);
person1.setName('Nice');
console.log(person1.fullName());

// document.getElementById();
let str = new String('hello');
let newStr = str.replace('ll','rr');
console.log(newStr);

console.log(str.length);

let text = 'Please locate where "locate" occurs';

let loc = text.indexOf('locate'); //lastIndexOf(); 뒤에서부터

if(loc != -1) {
    console.log(loc);
} else {
    console.log("값을 찾을 수 없습니다.")
}

let subString = text.substring(0,6);
console.log(subString);
let subStr = text.substr(7,6);
console.log(subStr);

let strSlice = text.slice(-15,-9);
console.log(strSlice);
console.log(text);

let url = 'http://www.daum.net';
let firstPos = url.indexOf('.');
let lastPos = url.lastIndexOf('.');
console.log(url.substring(firstPos + 1, lastPos));
console.log(url.substring(lastPos + 1));

let ary = 'apple, melon, mango, banana';
let strAry = ary.split(',');
for(let str of strAry) {
    console.log(str);
}

let str1 = 'This SQL keywords reference contains the reserved words in'
let str1Ary = str1.split(' ');
let newText = document.getElementById('new');
for (let str of str1Ary) {
    newText.innerHTML += '<button>' + str + '</button>';
}

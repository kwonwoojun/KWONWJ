// // function.js

// function sumFunc(var1, var2) {  //변수 이름만 ex) var1, var2
//     let num1, num2;
//     num1 = var1;
//     num2 = var2;
//     let result = num1 + num2;

//     console.log(result);
//     return result;  //return 결과값 반환.
// }

// let sum = sumFunc(33, 44);

// let multiFunc = function(v1, v2) {
//     let num1 = v1, 
//         num2 = v2;
//     return num1 * num2;
// }

// console.log(multiFunc());   //multiFunc의 값을 보려면 ()포함.

// function callBackFunc(func, val1) {
//     return func() + val1;

// }
// sum = callBackFunc(multiFunc, 11);

// document.write(sum);

function myFunc(v1, v2) {
    let sum = 0;
    for ( i = v1; i<=v2; i++) {
        sum += i;
    }
    return sum;
}
console.log(myFunc(3,5));

let myfunc2 = function (v1, v2) {
    let sum = 0;
    for ( i = v2; i<=v1; i++) {
        sum += i;
    }
    return sum;
}
console.log(myfunc2(5,3));



sum = 0;
for ( i = 1; i<=5; i++) {
    sum += i; 
}
console.log(sum);



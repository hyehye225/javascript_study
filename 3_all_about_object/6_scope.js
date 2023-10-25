/**
 * Scope
 */

var numberOne = 20;

function levelOne() {
  console.log(numberOne);
}

// levelOne();

function levelOne() {
  var numberOne = 40;

  console.log(numberOne);
}

// levelOne(); // 40

console.log(numberOne); // 20

function levelOne() {
  var numberOne = 40;

  function levelTwo() {
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// console.log(numberTwo); // 안나온다. 하위 스코프에는 접근을 할 수 없다.

/**
 * Js -> Lexical Scope
 *
 * 선언된 위치가 상위 스코프를 정한다.
 *
 * Dynamic Scope
 *
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne() {
  var numberThree = 100;
  functionTwo();
}
function functionTwo() {
  console.log(numberThree);
}
functionOne(); // 3

// var i = 999;
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(`i in global scope : ${i}`); // 10

let i = 999;
// 블록 레벨 스코프
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(`i in global scope : ${i}`); // 999

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 *
 * let, cont 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 *
 */

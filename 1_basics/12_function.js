/**
 *  만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환 받고 싶다면 어떻게 해야할까?
 */

console.log((((10 * 2) / 2) % 3).toString()); // 1

// DRY
// Don't Repeat Yourself
function calculate() {
  return (((10 * 2) / 2) % 3).toString();
}

// calculate(); // 1

function calculate(number) {
  console.log((((10 * number) / 2) % 3).toString());
}

calculate(4);

// 함수에서 입력받는 값에 대한 정의를 parameter
// 실제 입력하는 값은 argument라고 한다.

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(2, 4);
multiply(2);

/**
 *  return 받기
 */
console.log("--------------------------------");
function multiply(x, y) {
  return x * y;
}

const result1 = multiply(1, 2);
console.log(result1);

const result2 = multiply(2, 3);
console.log(result2);

console.log("--------------------------------");
// Arrow Function

const multiply2 = (x, y) => {
  return x * y;
};
console.log(multiply2(1, 2));

const multiply3 = (x, y) => x * y;

// 인자가 하나면 인자의 괄호를 생략할 수 있다.
const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(2)(3)(4));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x}, y: ${y}, z: ${z}`;
    };
  };
}

console.log(multiply6(2)(3)(4));

const multiplyTwo = function (x, y) {
  return x * y;
};

console.log(multiplyTwo(1, 2));
console.log("--------------------------------");
const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};
console.log(multiplyThree(1, 2, 3));

// 무한하게 parameter들을 받을 수 있다.
const multiplyAll = function (...arguments) {
  console.log(arguments);
  //   return Object.values(arguments).reduce((a, b) => a * b, 1);
  return arguments.reduce((a, b) => a * b, 1);
};

console.log(multiplyAll(1, 2, 3, 4, 5));

// 즉시 실행 함수

(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true
// 함수는 자바스크립트에서 오브젝트이다.

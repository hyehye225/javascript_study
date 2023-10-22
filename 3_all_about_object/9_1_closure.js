/**
 * Closure
 *
 *  클로저는 상위 함수보다 하위 함수가 더 오래 살아있는 경우이다.
 *
 */

// 아래는 하위 함수가 더 오래 살아있는 경우가 아니다.
// function getNumber() {
//   var number = 5;

//   function innerGetNumber() {
//     return number;
//   }

//   return innerGetNumber();
// }

// console.log(getNumber()); // 5

// 아래는 클로저의 예시
// 상위 함수보다 하위 함수가 더 오래 존재하는 경우

function getNumber() {
  var number = 5;

  function innerGetNumber() {
    return number;
  }

  return innerGetNumber;
}
const runner = getNumber();
console.log(runner);
console.log(runner());

// 데이터 캐싱
function cacheFunction() {
  // 아래 계산은 매우 오래 걸린다는 가정을 했을때
  var number = 10 * 10;

  function innerCacheFunction(newNumb) {
    return number * newNumb;
  }
  return innerCacheFunction;
}

// 오래 걸리는 계산을 runner2에서 한번만 실행할 수 있다.
// 효율적으로 함수를 작성할 수 있다.
const runner2 = cacheFunction();
console.log(runner2(10));

// 반복적으로 특정 값을 변환해야 할때
function cacheFunction2() {
  var number = 99;
  function increment() {
    number++;
    return number;
  }
  return increment;
}
const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());

// 정보 은닉
function Idol(name, year) {
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function () {
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
  };
}

const idol = new Idol("홍길동", 2019);
console.log(idol.sayNameAndYear());

console.log(idol.name); // 홍길동
console.log(idol._year); // undefined

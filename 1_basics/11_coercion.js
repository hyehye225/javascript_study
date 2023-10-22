let age = 32;

// 명시적 변환
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적 변환
// 숫자에 글자를 더하면 string 타입이 된다.
let test = age + "";
console.log(typeof test, test);

// 실무에서는 이용 하지 말기
// 기능적으로 가능하다는 것만 알기
console.log("98" + 2); // 982
console.log("98" * 2); // 196 - string에는 곱한다는 개념이 없기 때문!
console.log("98" - 2); // 96

// 명시적 변환 몇 개 더 배우기
console.log(typeof (99).toString());
console.log(typeof true.toString());
console.log(typeof Infinity.toString());

// 숫자 타입으로 변환
console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", +"1"); // string이나 boolean값 앞에 +를 붙이면 type이 number가 된다.

// boolean 타입으로 변환
// string안에 값이 들어있으면 boolean 기준으로 봤을 때 true이다.
console.log(!!"x");

console.log(!!"");

console.log(!!0); // false
console.log(!!"0"); // true

console.log(!!"false"); // true

console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!false); // false

// object/array 는 값을 가지고 있든 안가지고 있든 무조건 true
console.log(!!{}); // true
console.log(!![]); // true

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환한다.
 */

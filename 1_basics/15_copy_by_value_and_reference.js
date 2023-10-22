/**
 * 기본적으로 모든 primitive 값은 copy by value 이다.
 * 객체는 copy by reference 이다.
 *
 */

let original = "안녕하세요";
let clone = original;

console.log(original);
console.log(clone);

clone += "안유진 입니다. ";
console.log("--------------------------------");
console.log(original);
console.log(clone);

let originalObj = {
  name: "장원영",
  group: "아이브",
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj); // true;
console.log(original === clone); // false;

const wonYoung = {
  name: "장원영",
  group: "아이브",
};
const wonYoung2 = wonYoung;
const wonYoung3 = {
  name: "장원영",
  group: "아이브",
};

console.log(wonYoung === wonYoung2); // true
console.log(wonYoung === wonYoung3); // false
console.log(wonYoung2 === wonYoung3); // false

// spread operator
const yuJin4 = {
  ...wonYoung,
};
console.log(yuJin4);
console.log(yuJin4 === wonYoung); // false

const yuJin5 = {
  year: 2003,
  ...wonYoung,
};
console.log(yuJin5);

// 순서가 중요하다! (덮어씌워짐)
const yuJin6 = {
  name: "안유진",
  ...wonYoung,
};
console.log(yuJin6); // name은 여전히 장원영

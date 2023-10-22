let yuJin = {
  name: "유재진",
  age: 25,
  dance: function () {
    return `${this.name}이 춤을 춥니다. `;
  },
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin["name"]);

const key = "name";
console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = "name";
const nameValue = "유재진";

const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this[nameKey]}이 춤을 춥니다. `;
  },
};

console.log(yuJin2);
console.log(yuJin2.dance());

// 존재하지 않는 key값을 넣을 경우
yuJin2["englishName"] = "You Jae Jin";
console.log(yuJin2);

// 삭제하는 방법
delete yuJin2["name"];
console.log(yuJin2);

// const 키워드를 사용하면 값을 변경할 수 없는데..?
// 객체의 특징
// const 로 선언할 경우 객체 자체를 변경 할 수는 없다.
/** 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 *
 */

const wonYoung = {
  name: "장원영",
  group: "아이브",
};
console.log(wonYoung);

// 에러가 남
// wonYoung = {};
// console.log(wonYoung);

// 속성 값 변경은 된다!
wonYoung["group"] = "코드팩토리";
console.log(wonYoung);

// 모든 키 값 다 가져오기
console.log(Object.keys(wonYoung));

// 모든 value 값 다 가져오기
console.log(Object.values(wonYoung));

// 새로운 문법
// name의 key 값과 변수의 이름이 같을 때 하나만 입력해도 된다.

const name = "안유진";

const yuJin3 = {
  // name : name,
  name,
};

console.log(yuJin3);

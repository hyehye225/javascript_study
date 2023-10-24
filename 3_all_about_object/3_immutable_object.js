const y = {
  name: "y",
  year: 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(value) {
    this.year = new Date().getFullYear() - value;
  },
};
console.log(y);

/**
 * Extensible
 */

console.log(Object.isExtensible(y));

y["position"] = "vocal";
console.log(y);

Object.preventExtensions(y);
console.log(Object.isExtensible(y));

// 에러를 던지지는 않지만 값이 추가가 되지 않는다.
y["groupName"] = "아이브";
console.log(y);

// 값을 추가하진 못하지만 기존의 값을 삭제할 수는 있다.
delete y["position"];
console.log(y);

/**
 * Seal
 */

console.log(y);

console.log(Object.isSealed(y)); // 기본값은 false

Object.seal(y);
console.log(Object.isSealed(y)); // true

y["groupName"] = "아이브";
console.log(y); // 추가가 되지 않는다.

delete y["name"];
console.log(y); // 삭제가 되지 않는다.

Object.defineProperty(y, "name", {
  value: "코드팩토리",
});
console.log(Object.getOwnPropertyDescriptor(y, "name"));

// seal은 configurable을 false로 만드는 것과 동일하다.

/**
 * Freezed
 */

// 읽기 외의 모든 기능을 불가능하게 만든다.

console.log(Object.isFrozen(y));

Object.freeze(y);
console.log(Object.isFrozen(y));

y["groupName"] = "아이브";
console.log(y);

delete y["name"];
console.log(y);

// 추가나 삭제 모두 안된다.

// Object.defineProperty(y, "name", {
//   value: "안유진",
// }); // 에러가 난다.
console.log(Object.getOwnPropertyDescriptor(y, "name"));
// 값을 추가, 삭제, 변경 하지 못한다.

// 객체 안에 객체가 중첩되는 경우는?
const y4 = {
  name: "y",
  year: 2003,
  wonYoung: {
    name: "장원영",
    year: 2002,
  },
};
Object.freeze(y4);

console.log(Object.isFrozen(y4)); // true

console.log(Object.isFrozen(y4.wonYoung)); // false

// 상위 object를 freeze했다고 해서 하위 object가 freeze 되는 것이 아니다.
// extensible도 seal도 모두 마찬가지!

/**
 *
 *  Property Attribute
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *    설정할 때 호출되는 함수로 구성된 프로퍼티
 *    예를 들면 getter와 setter
 */
const y = { name: "y", year: 2003 };
// 클래스에 직접적으로 붙어 있는 값은 static
console.log(Object.getOwnPropertyDescriptor(y, "name"));
console.log(Object.getOwnPropertyDescriptor(y, "year"));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in loop 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 * false일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 * 단, writable이 true인 경우 값 변경과 writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptors(y)); // 모든 property가 다 나온다.

const y2 = {
  name: "y",
  year: 2003,
  get age() {
    return new Date().getFullYear() - this.year;
  },
  set age(value) {
    this.year = new Date().getFullYear() - value;
  },
};
console.log(y2);
console.log(y2.age);

y2.age = 32;
console.log(y2.age);
console.log(y2.year);

// accessor property는 value attribute가 존재하지 않고 getter, setter가 존재한다.
console.log(Object.getOwnPropertyDescriptor(y2, "age"));

y2.height = 172;
console.log(y2);
console.log(Object.getOwnPropertyDescriptor(y2, "height"));

Object.defineProperty(y2, "height", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(y2);
console.log(Object.getOwnPropertyDescriptor(y2, "height"));
// value만 설정해 줄 경우 기본값이 모두 false (defineProperty에서)

y2.height = 180;
console.log(y2);

Object.defineProperty(y2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(y2, "height"));

// writable이 false이기 때문에 수정이 되지 않는다. (오류가 나지는 않는다.)
y2.height = 172;
console.log(y2);

/**
 * Enumerable
 */

console.log(Object.keys(y2));

Object.defineProperty(y2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(y2, "name"));

console.log(Object.keys(y2)); // name이 사라진다.
// enumerable이 false이기 때문에 더이상 열거가 되지 않는다.
console.log(y2.name); // name이 존재는 여전히 한다.

/**
 * Configurable
 */
Object.defineProperty(y2, "height", {
  writable: true, // 동시에 writable을 작성해주면 value는 바꿀 수 있다.
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(y2, "height"));

// Object.defineProperty(y2, "height", {
//   enumerable: false,
// }); // 재정의 불가하기에 에러가 난다.

Object.defineProperty(y2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(y2, "height")); // 값은 잘 변경이 된다. (writable이 true이므로)

// configurable이 false일 경우 기본적으로 값 수정은 불가하다.
// 하지만 writable이 true이면 값을 수정할 수 없다. (예외)
// writable을 true에서 false로 바꿀 수도 있다.
// 반대는 불가.

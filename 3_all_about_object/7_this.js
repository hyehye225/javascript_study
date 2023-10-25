/**
 * this
 *
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 *
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 *
 */
const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global); // true

const y = {
  name: "안유진",
  year: 2003,
  sayHello: function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  },
};

console.log(y.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `안녕하세요 저는 ${this.name}입니다.`;
  };
}

const y2 = new Person("안유진", 2003);
console.log(y2.sayHello());

// 객체의 메서드로 가장 상위 레벨에 선언을 하면
/**
 * this가 자동으로 실행하는 대상 객체로 매핑이 되지만
 * 만약에 그 외의 위치에 함수를 선언하게 되면
 * 함수의 this는 무조건 global object에 맵핑되게 된다.
 *
 */
Person.prototype.dance = function () {
  function dance2() {
    return `${this.name}이 춤을 춥니다.`;
  }

  return dance2();
};
console.log(y2.dance());

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 *
 * 1) 일반 함수 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

function returnName() {
  return this.name;
}

console.log(returnName()); // undefined (global.name은 존재하지 않기 때문!)

const y3 = {
  name: "안유진",
};

console.log(returnName.call(y3)); // 안유진
console.log(returnName.apply(y3)); // 안유진

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 */

function multiply(x, y, z) {
  return `${this.name} / ${x} * ${y} + ${z}  `;
}
console.log(multiply.call(y3, 3, 4, 5));
console.log(multiply.apply(y3, [3, 4, 5]));

/**
 * bind()
 * this를 바인딩만 하고 나중에 실행할 수 있다.
 */

const laterFunc = multiply.bind(y3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());

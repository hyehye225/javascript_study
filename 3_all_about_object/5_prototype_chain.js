const testObj = {};

console.log(testObj.__proto__);
/**
 *  __proto__는 모든 객체에 존재하는 프로퍼티다.
 * class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

console.log(Person.prototype); // {}
console.dir(Person.prototype, {
  showHidden: true,
});

// circular reference
// 서로가 서로를 참조하고 있는 상태
console.log(Person.prototype.constructor === Person); // true
console.log(Person.prototype.constructor.prototype === Person.prototype);

const y = new Person("y", 2003);

console.log(y.__proto__); // {}
console.log(y.__proto__ === Person.prototype); // true

console.log(testObj.__proto__ === Object.prototype); //

console.log(Person.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

console.log(y.toString());
console.log(Object.prototype.toString()); // 존재한다.

// 프로토타입끼리 계속 연결되어 있는 것 -> 프로토타입 체인

function Person2(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`;
  };
}

const y2 = new Person2("y2", 2003);
const w2 = new Person2("w2", 2004);

console.log(y2.sayHello());
console.log(w2.sayHello());
console.log(y2.sayHello === w2.sayHello); // false
// 실제로 같은 기능의 sayHello지만 다른 공간의 메모리를 차지하고 있다.
// 리소스 낭비

console.log(y2.hasOwnProperty("sayHello")); // true
// y2 만의 고유 프로퍼티 이다.

function Person3(name, age) {
  this.name = name;
  this.age = age;
}

Person3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

const y3 = new Person3("y3", 2003);
const w3 = new Person3("w3", 2004);

console.log(y3.sayHello());
console.log(w3.sayHello());
console.log(y3.sayHello === w3.sayHello); // true
// 같은 공간을수 가리키고 있기 때문에 리소스를 더욱 효율적으로 사용할 수 있다.

console.log(y3.hasOwnProperty("sayHello")); // false

Person3.sayStaticHello = function () {
  return "안녕하세요 저는 static method 입니다. ";
};

console.log(Person3.sayStaticHello());

/**
 * Overriding
 */

function Person4(name, age) {
  this.name = name;
  this.age = age;

  // prototype 메서드를 인스턴스 메서드로 덮어씌울 수 있다. (override)
  this.sayHello = function () {
    return `안녕하세요 저는 인스턴스 메서드입니다.`;
  };
}

Person4.prototype.sayHello = function () {
  return `안녕하세요 저는 prototype 메서드입니다! `;
};

const y4 = new Person4("y4", 2003);

// 프로퍼티 쉐도잉 - class에서 override
console.log(y4.sayHello());

// 프로토타입값이나 프로토타입을 변경할 수 있다.
// 상속받는 클래스를 변경할 수 있다.
// 인스턴스를 생성하고 난 다음에도 할 수 있다.

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function Person5(name, age) {
  this.name = name;
  this.age = age;
}

Person5.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`;
};

function FemalePerson(name, age) {
  this.name = name;
  this.age = age;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다.`;
  };
}
const g = new Person5("g", 2003);
const r = new FemalePerson("r", 2004);

console.log(g.__proto__);
console.log(g.__proto__ === Person5.prototype);
console.log(Object.getPrototypeOf(g) === Person5.prototype); // true

console.log(g.sayHello());
console.log(r.dance());
// console.log(r.sayHello()); // 에러

console.log(Object.getPrototypeOf(r) === FemalePerson.prototype); // true

// 인스턴스를 만든 다음 상속하는 대상을 바꾸어버린다.
Object.setPrototypeOf(r, Person5.prototype);
console.log(r.sayHello());

console.log(r.constructor === Person5); // true
console.log(g.constructor === Person5); // true

console.log(Object.getPrototypeOf(r) === Person5.prototype); // true
console.log(FemalePerson.prototype === Person5.prototype); // false
// r의 프로토타입의 값은 Person5로 변경이 되었는데 FemalePerson의 프로토타입이 변경된 것은 아니다.
// r과 FemalePerson의 연결만 끊긴 것!

FemalePerson.prototype = Person5.prototype;

const e = new FemalePerson("e", 2003);
console.log(Object.getPrototypeOf(e) === FemalePerson.prototype); // true
console.log(Object.getPrototypeOf(g) === Person5.prototype); // true
// r의 프로토타입을 Person5로 set 했을 때는 FemalePerson.prototype과는 같지 않았다. -> 차이점

console.log(FemalePerson.prototype === Person5.prototype); // true

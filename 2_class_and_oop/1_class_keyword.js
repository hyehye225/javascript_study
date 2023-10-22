/**
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 * 정보를 일반화해서 정리하는 방법이다.
 */
class IdolModel {
  // 자바스크립트에서는 name과 year를 지워도 정상적으로 실행이 된다.
  name;
  year;

  constructor(name, year) {
    // this는 현재 인스턴스
    this.name = name;
    this.year = year;
  }
  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// 클래스에 해당되는 객체가 생성된다.
const idol = new IdolModel("안유진", 2003);
console.log(idol);
const idol2 = new IdolModel("장원영", 2004);
console.log(idol2);

// 클래스의 인스턴스는 객체이다.
console.log(idol.sayName());
console.log(idol2.sayName());

console.log(typeof IdolModel); // function
console.log(typeof idol); // object
console.log(typeof idol2); // object

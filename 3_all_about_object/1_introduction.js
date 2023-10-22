/**
 * 객체를 선언할 때 사용할 수 있는 방법들
 *
 * object를 생성해서 객체 생성
 * class를 인스턴스화해서 생성
 * function을 사용해서 객체 생성
 */

const yuJin = {
  name: "유재진",
  age: 20,
};
console.log(yuJin);

class Person {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
console.log(new Person("홍길동", 2019));

// 생성자 함수
// 함수에는 constructor가 없기 때문에 name과 year를 인자로 받아준다.
function Person2(name, year) {
  this.name = name;
  this.year = year;
}

const person2 = new Person2("홍길동", 2019);

console.log(person2);

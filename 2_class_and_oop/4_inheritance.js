/**
 *
 */
class IdolModel {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return `여자 아이돌이 춤을 춥니다. `;
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return `남자 아이돌이 노래를 부릅니다. `;
  }
}

// 상속을 받을 때는 모든 preperty와 생성자까지 상속을 받는다.
const y = new FemaleIdolModel("yuJin", 2003);
console.log(y);

const j = new MaleIdolModel("Jin", 1995);
console.log(j);

console.log(y.dance());
console.log(y.name);

console.log(j.sing());
console.log(j.year);

// console.log(y.sing()); // 불가

const cf = new IdolModel("코드팩토리", 1992);
console.log(cf); // IdolModel

console.log(cf.name);
// 부모가 자식 클래스의 property를 상속 받지는 못한다.

console.log(y instanceof FemaleIdolModel); // true
console.log(y instanceof IdolModel); // true
console.log(y instanceof MaleIdolModel); // false

console.log(j instanceof FemaleIdolModel); // false
console.log(j instanceof IdolModel); // true
console.log(j instanceof MaleIdolModel); // true

console.log(cf instanceof FemaleIdolModel); // false
console.log(cf instanceof IdolModel); // true
console.log(cf instanceof MaleIdolModel); // false

class IdolModel {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요. ${this.name} 입니다. `;
  }
}
class FemaleIdolModel extends IdolModel {
  part;
  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }
  // sayHello를 override
  // 변수 값을 불러올 때는 super를 함수 안에서 쓸 수 없다.
  // 함수는 실행 가능
  sayHello() {
    // return `안녕하세요. ${this.name} 입니다. ${this.part}를 맡고 있습니다. `;
    return `${super.sayHello()} ${this.part}를 맡고 있습니다. `;
  }
}

const y = new FemaleIdolModel("yuJin", 2003, "보컬");
console.log(y);

const w = new FemaleIdolModel("wonYoung", 2002, "센터");
console.log(w);
console.log(w.sayHello());

console.log(y.sayHello());

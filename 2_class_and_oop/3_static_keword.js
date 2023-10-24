class IdolModel {
  name;
  year;
  static groupName = "아이브";

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static returnGroupName() {
    return this.groupName;
  }
}

const y = new IdolModel("yuJin", 2003);
console.log(y);

// static 키워드를 쓰면 인스턴스가 아닌 클래스 자체에 귀속된다.
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */

class IdolModel2 {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel2(object.name, object.year);
  }
  static fromList(list) {
    return new IdolModel2(list[0], list[1]);
  }
}

const y2 = IdolModel2.fromObject({ name: "yuJin", year: 2003 });
console.log(y2);

const wonYoung = IdolModel2.fromList(["장원영", 2003]);
console.log(wonYoung);

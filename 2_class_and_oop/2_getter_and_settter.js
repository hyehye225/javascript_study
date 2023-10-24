class IdolModel {
  name;
  year;
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  /**
   *  1) 데이터를 가공해서 새로운 데이터를 반환할 때
   *  2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  // 실제로 바꾸고 싶은 property의 이름과 겹치게 많이 설정한다.
  // setter의 경우 무조건 파라미터를 하나 받아야 한다.
  set setName(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("유재진", 2019);
console.log(yuJin);
// get을 붙이는 순간 변수처럼 사용할 수 있다.
console.log(yuJin.nameAndYear);

// property를 private으로 설정했을 땐 직접 access가 불가능하기 때문에 setter를 사용한다.
yuJin.setName = "장원영";
console.log(yuJin);

class IdolModel2 {
  // private한 값 # 붙이기
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("유재진", 2019);
console.log(yuJin2);

// getter 사용하여 private한 값을 반환한다.
console.log(yuJin2.name);

yuJin2.name = "코드팩토리";
console.log(yuJin2.name);

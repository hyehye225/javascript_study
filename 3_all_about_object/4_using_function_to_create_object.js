function IdolModel(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name}이 춤을 춥니다. `;
  };
}

const y = new IdolModel("y", 2003);
console.log(y);
console.log(y.dance());

// new 키워드를 쓰지 않을 경우
const y2 = IdolModel("y2", 2003);
console.log(y2); // undefined (함수에서 반환해주는 게 없기 때문)

// 파일이 생성되었을 때 자동으로 생성되는 global 객체
console.log(global.name);
// new 키워드를 사용하지 않고 생성자 함수를 실행 할 경우 this 키워드가
// global 에 붙어버린다. global의 값들을 설정하게 된다.
// 하지 말라!

/**
 * new 키워드를 붙였는지 안붙였는지 확인하는 방법 존재
 * new.target이 undefined일 경우
 * if(!new.target) {
 * 강제로 new 키워드 써주기
 * return new IdolModel(name,year);
 * }
 */

// const IdolModelArrow = (name, year) => {
//   this.name = name;
//   this.year = year;
// };
// const y3 = new IdolModelArrow("안유진", 2003);
// console.log(y3); // 이 함수는 생성자 함수가 아니라고 에러가 난다.

// new 키워드는 일반 함수에서만 사용할 수 있다.

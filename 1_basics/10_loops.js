/**
 *  *를 이용해서 6x6의 정사각형을 출력해라
 */
let string = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i === 1 || i === 6) {
      string += "*";
    } else {
      if (j === 1 || j === 6) {
        string += "*";
      } else string += " ";
    }
  }
  string += "\n";
}
console.log(string);

// for...in
// key값을 받을 수 있다.
const yuJin = {
  name: "안유진",
  year: 2000,
};

for (let key in yuJin) {
  console.log(key, yuJin[key]);
}
// for ... of
// 인덱스를 가지고 오고싶을땐 for in
// 값을 가지고 오고싶을땐 for of (이터러블 한것만)
let array = ["대한민국", "일본", "중국", "러시아", "미국"];
for (let value of array) {
  console.log(value);
}

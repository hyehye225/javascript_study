/**
 * boolean 값과 string 값 앞에 +를 붙이면 type of 이 number 가 나온다.
 *
 */
var sample = "99";

console.log(+sample);
console.log(typeof +sample);

sample = true;

console.log(+sample); // 1
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == "5");
console.log(0 == ""); // true

console.log(5 === 5); // true
console.log(5 === "5"); // false

// 실무에서는 무조건 ===을 쓰는게 좋다.

/**
 * 단축 평가 (short circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 떄 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 떄 좌측이 false면 우측 값 반환
 *
 * 장점 : 계속 연결할 수 있다.
 */

console.log(true && true && "홍길동"); // 홍길동

/**
 * 지수 연산자
 */
console.log(2 ** 2);

/**
 * null 연산자
 * 좌측값이 null이거나 undefined이면 오른쪽 값을 반환
 */
let name;
console.log(name);

name = name ?? "홍길동";
console.log(name);

name = name ?? "유재석";
console.log(name); // 홍길동

let name2;
name2 ??= "코드팩토리"; // 이렇게 표현도 가능!
console.log(name2); // 코드팩토리

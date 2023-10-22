/**
 * Array Functions
 *
 * push : 마지막 인덱스에 추가가 된다. array를 직접적으로 변경한다.
 * 새로운 길이를 반환한다.
 */
let arr = [1, 2, 3];

console.log(arr.push(4)); // 4
console.log(arr);

console.log(arr.splice(0, 2));
console.log(arr);

// concat은 원본 배열이 변하지 않는다.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.concat([6, 7, 8]));
console.log(arr2);

// slice는 splice의 원래 배열이 변경되지 않는 버전
// 두번째 인자는 몇 번 인덱스(+1) 까지 삭제를 할 지 결정
// splice는 두번째 인자가 몇 개의 요소를 삭제를 할지
// 두 가지가 차이점
console.log(arr2.slice(1, 3));
console.log(arr2);

console.log(arr2.splice(1, 3));
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
// spread 연산자를 사용할 경우 완전히 새로운 배열이 생성된다.
let arr4 = [...arr3];
console.log(arr4);
let arr5 = arr3;
console.log(arr5);

console.log(arr3 === arr4); // false
console.log(arr3 === arr5); // true

// join
// 모든 값들은 string으로 엮을 때 많이 사용한다.
console.log(arr3.join()); // 1,2,3,4,5
console.log(arr3.join("-")); // 1-2-3-4-5

// sort
// 오름차순
// 반환하는 값이 없다. 원래 array가 변경된다.
console.log([2, 6, 3, 1, 4, 5].sort());
console.log(arr3);

// 요소의 역순을 반환
console.log([1, 2, 3, 4, 5].reverse());

//  a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) b를 a보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
let numbers = [1, 2, 3, 4, 5, 6];
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers); // [1, 2, 3, 4, 5, 6]

// map()
// 반환값이 있다.
// 새로운 배열을 반환한다.
console.log(numbers.map((num) => num));
console.log(numbers.map((num) => `숫자 : ${num}`));

// filter()
// 찾는 기능
number = [1, 8, 7, 6, 3];
console.log(number.filter((num) => num % 2 === 0));

// find()
// filter는 모든 값을 보지만 find는 해당되는 첫 번째 값만 반환한다.
console.log(number.find((num) => num % 2 === 0));

// findIndex()
console.log(number.findIndex((num) => num % 2 === 0));

// reduce()
// argument를 2개 넣게 되어있다.
// 기존에 반환했던 값이 sum에 들어가고 새로운 값이 num에 들어간다.
console.log(numbers);
console.log(numbers.reduce((sum, num) => sum + num, 0));

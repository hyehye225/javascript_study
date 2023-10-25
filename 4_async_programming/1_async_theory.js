// function longWork() {
//   const now = new Date();

//   /**
//    * milliseconds since epoch
//    * 1970년도 1월 1일 부터 지금 코드가 실행되는 순간까지의 시간을
//    * 밀리초로 반환한다.
//    */

//   const milliseconds = now.getTime();
//   const afterTwoSeconds = milliseconds + 2000;

//   while (new Date().getTime() < afterTwoSeconds) {}
//   console.log("completed");
// }

// console.log("hello");
// longWork();
// console.log("bye");

function longWork() {
  setTimeout(function () {
    console.log("completed");
  }, 2000);
}

console.log("hello");
longWork();
console.log("bye");

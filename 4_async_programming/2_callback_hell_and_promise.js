/**
 * callback
 */

function waitAndRun() {
  setTimeout(function () {
    console.log("completed");
  }, 2000);
}

// waitAndRun();

function waitAndRun2() {
  setTimeout(function () {
    console.log("completed 1");
    setTimeout(function () {
      console.log("completed 2");
      setTimeout(function () {
        console.log("completed 3");
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * promise
 */

const timeoutPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("completed promise");
  }, 2000);
});

// timeoutPromise.then(function (result) {
//   console.log("---then---");
//   console.log(result);
// });

const getPromise = (seconds) =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("error");
    }, seconds * 1000);
  });

// getPromise(2)
//   .then(function (result) {
//     console.log("---first then---");
//     console.log(result);
//     return getPromise(2);
//   })
//   .then(function (result) {
//     console.log("---second then---");
//     console.log(result);
//     return getPromise(3);
//   })
//   .then(function (result) {
//     console.log("---third then---");
//     console.log(result);
//     return getPromise(4);
//   });

// getPromise(2)
//   .then(function (result) {
//     console.log("---first then---");
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log("---first catch---");
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("---first finally---");
//   });

// promise.all은 가장 느린 함수 기준으로 then이나 catch가 불린다.
// 전부 실행이 동시에 된다.
Promise.all([getPromise(2), getPromise(3), getPromise(4)]).then((results) => {
  console.log(results);
});

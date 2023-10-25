const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject("completed"), seconds * 1000);
  });

// await는 promise에만 쓸 수 있다.
async function runner() {
  try {
    const result1 = await getPromise(2);
    console.log(result1);
    const result2 = await getPromise(3);
    console.log(result2);
    const result3 = await getPromise(4);
    console.log(result3);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("finally");
  }
}

runner();
console.log("---"); // 먼저 실행된다.

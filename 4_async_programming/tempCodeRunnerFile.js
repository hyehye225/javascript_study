Promise.all([getPromise(2), getPromise(3), getPromise(4)]).then((results) => {
  console.log(results);
});
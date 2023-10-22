/**
 * 발생시킬 때 -> 던진다고 한다. (throw)
 * 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 */

function runner() {
  try {
    console.log("Hello");

    // 에러를 던지는 순간에 코드가 정지되어 다음 코드가 실행되지 않는다.
    throw new Error("error");

    console.log("Goodbye");
  } catch (e) {
    console.log("---Error---");
    // console.log(e);
  } finally {
    console.log("---Finally---");
  }
  // finally는 써도 되고 안써도 되고 optional이다.
}

runner();

/**
 *  여섯개의 Primitive Types
 *  한개의 오브젝트 타입
 *
 *
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. Null
 * 6. Symbol
 *
 * 7. Object
 *    Function
 *    Array
 *    Object
 *
 * null 타입
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할때
 * 사용된다.
 * type of null은 null <-> type of undefined는 undefined
 *
 * Symbol 타입
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를
 * 호출해서 사용한다.
 */
const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2); // false

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시한다.
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 * JS -> dynamic typing
 */

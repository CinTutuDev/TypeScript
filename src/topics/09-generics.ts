export function whatMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatMyType<string>("Holitaaa");
const amINumber = whatMyType<number>(123);
const amIArray = whatMyType<number[]>([1, 2, 3]);

console.log(amIString.split(""));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));

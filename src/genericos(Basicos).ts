function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(5));
console.log(identity<string>("Hola"));

function ExampleConstructor() {

}

console.log('value of prototype:', Object.getPrototypeOf(ExampleConstructor));

console.log('typeof prototype:', typeof Object.getPrototypeOf(ExampleConstructor));

var a = new ExampleConstructor();

console.log('value of new:', a);

console.log(a instanceof ExampleConstructor);

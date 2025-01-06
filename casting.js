// casting.js

// Explicit Conversions
console.log("Explicit Conversions:");

// Number to String
let num = 123;
console.log(String(num)); // "123"

// String to Number
let str = "456";
console.log(Number(str)); // 456

// Boolean to String
let bool = true;
console.log(String(bool)); // "true"

// String to Boolean
let strBool = "true";
console.log(Boolean(strBool)); // true

// Number to Boolean
let numBool = 0;
console.log(Boolean(numBool)); // false

// Boolean to Number
let boolNum = false;
console.log(Number(boolNum)); // 0

// Implicit Conversions in Operations
console.log("\nImplicit Conversions in Operations:");

// Number + String (Number to String)
console.log(123 + "456"); // "123456"

// String + Number (Number to String)
console.log("123" + 456); // "123456"

// Boolean + Number (Boolean to Number)
console.log(true + 1); // 2

// Number + Boolean (Boolean to Number)
console.log(1 + false); // 1

// String * Number (String to Number)
console.log("123" * 2); // 246

// String / Number (String to Number)
console.log("123" / 2); // 61.5

// String - Number (String to Number)
console.log("123" - 23); // 100

// Boolean + String (Boolean to String)
console.log(true + " is true"); // "true is true"

// String + Boolean (Boolean to String)
console.log("false is " + false); // "false is false"
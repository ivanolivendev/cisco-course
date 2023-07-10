// Question 1: Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

let varBoolean = true;
let constBoolean = new Boolean(false);
let varNumber = 1;
let constNumber = new Number(2);
let varBigInt = 10n;
let constBigInt = BigInt(1234n);
let varSting = 'abc';
let constString = new String('zwy');
let varUndefined;

// Question 2: Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].
let nome = 'Ivan';
let idade = 33;
let peso = 80n;
let isEmpregado = false;
let msg = `Olá meu nome é ${nome}, tenho ${idade}, peso ${peso} e atualmente sobre minha situação de emprego é ${isEmpregado}`;

console.log(msg)

// Question 3: Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

let a = "123";
let b = new Number(a);
let c = BigInt(b);
let d = new Boolean(c);

console.log(d);

console.log('-----------------------')

// Question 4: Try adding two values of the same type and check the result type. Try it for all primitive types.
let e = 1 + 2;
let f = 'a' + 'b';
let g = true + true;
let h = 100n + 100n;

console.log(h);
console.log("--------------------");
// Question 5: Try adding two values of different types and check the results.

console.log(e + f);
console.log(g + f);
console.log(g + e);
console.log("--------------------")

// Question 6: Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

const str1 = 42 + new Number("1");
console.log(str1);




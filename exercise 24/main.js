"use strict";
//equality and inequality test 1
console.log("equality test with string:", "apple" === "apple");
//inequality and inequality test 2
console.log("inequality test with string:", "banana" !== "orange");
;
//tests using the lower case function
console.log("Lower Case function test:", "HELLO".toLowerCase() === "hello");
//numerical test involving equality
console.log("equality test with number:", 26 === 26);
//numerical test involving inequality
console.log("inequality test with number:", 26 != 35);
//greaterthan test
console.log("greaterthan test :", 10 > 5);
//lessthan test
console.log("lessthan test :", 5 < 10);
//greaterthan or equal to
console.log("greaterthan equal test :", 10 >= 10);
//lessthan or equal to
console.log("lessthan equal test :", 5 <= 10);
//tests using "and"  opretor
console.log("and opretor test :", 5 === 5 && 10 > 5);
//tests using "or"  opretor
console.log("and opretor test :", 5 === 5 || 10 > 5);
//test wether an item is in a array
const vagitables = ['onion', 'tomato', 'potato'];
console.log('Test"onion" in the array:', vagitables.includes("onion"));
//test wether  an item is not in a array
console.log('Test"chilli" in the array:', !vagitables.includes("chilli"));

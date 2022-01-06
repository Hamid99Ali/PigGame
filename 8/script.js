'use strict';
// primative data types in the JavaScripts.
// String number boolean null undefine NaN symbols BigInt is called primative types and they stored in the calls stack in the javascripts engines.

//Objects i.e. objects literial Arrays Functions and many more are called the reference date typres. in the javscript engine the they store in the head

// To not change the original object and thus change the coped object we follow the below steps.
const jassica = {
  lastName: 'Name',
  age: 23,
};
const New = {};
const jessicaCopy = Object.assign(New, jassica);
jessicaCopy.lastName = 'Davis';
console.log(jassica);
console.log(jessicaCopy);

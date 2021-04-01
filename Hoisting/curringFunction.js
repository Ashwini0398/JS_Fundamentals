//Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

// Uses of currying function
// a) It helps to avoid passing same variable again and again.

// b) It is extremely useful in event handling. 

//without curring

function volume(length, width, height) {
    return length * width * height;
 }
 document.write((volume(11,2,3)));


//with curring
function volume(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       }
    }
 }
document.write(volume(11)(2)(3))


//example 2
// function multiply(number){
//      return numB => {
//          return numB * number;
//      }
//  }

//  const multiplyByFive = multiply(5);

//  console.log(multiplyByFive(2));
//  console.log(multiplyByFive(4));
//  console.log(multiplyByFive(5));

//JSON

// const users =[{name:"ashwini",lastName: "Khonde"},{name:"vikrant",lastName:"Chitte"}];

// function mapkeyWithObject(key){
//     return object =>{
//             return object[key];
//     }
// };

// const getKeyName = mapkeyWithObject('name');

// const mappedUsers = users.map(getKeyName);
// console.log(mappedUsers);
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Fransico"];

const moreCities = ["Boston", ...cities];
const towns = ["Shrewsbury", ...cities, "Wilton", "Norfolk"]
/*
console.log(cities);
console.log(moreCities);
console.log(towns)
*/
function addElementToBeginningOfArray(array, element) {
  let  newArray = [element, ...array];
  return newArray;
}
// destructively means mutating or changing the original array

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array;
}   
/*
console.log(destructivelyAddElementToBeginningOfArray(chocolateBars, 'Mounds'));
*/

function addElementToEndOfArray(array, element) {
  return [...array, element]
}
/* 1  */
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
/*
console.log(destructivelyAddElementToEndOfArray(chocolateBars, "M \& M\'s"))
*/
function accessElementInArray(array, index) {
  return (array[index]);
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

/* 1 */
function removeElementFromBeginningOfArray(array) {
   array.slice(1);
   return array;
} 

function destructivelyRemoveElementFromEndOfArray(array) {
  (array.pop());
  return array;
 
}

function removeElementFromEndOfArray(array) {
    return (array.slice(0, array.length - 1))

}
/*
removeElementFromBeginningOfArray(chocolateBars);  
console.log(chocolateBars);
console.log(Object.keys([1, 2, 3]));
[chocolateBars].slice(1);
console.log(chocolateBars);
*/



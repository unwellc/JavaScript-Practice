/* Creates an array and do several array functions
Created by: Anwille M. Catindig */

const arr = [5, "Anwille", "Volvo", "Boo", true, 3.5];

function RemoveLast() {
  let newArr = Object.assign([], arr);
  newArr.pop();
  console.log(newArr);
}

RemoveLast();

/* Moves the last element of array to the first element
Can also be done using this syntax:
deskArray.unshift(deskArray.pop());
*/
function ExchangeLast() {
  let newArr = Object.assign([], arr);
  let firstElement = newArr.pop();
  newArr.unshift(firstElement);
  console.log(newArr);
}

ExchangeLast();

// Sorts array alphabetically.
function Arrange() {
  let newArr = Object.assign([], arr);
  newArr.sort();
  console.log(newArr);
}

Arrange();

/* Returnds a specified item from an array.
Can also be done with this syntax:
const foundItem = deskArray.find((item) => item === "notebook");
*/
let specItem = arr.find(function (item) {
  if (item.length > 5) {
    return item;
  }
});

console.log(specItem);

/*Removes specific item from an array
Can also be done with this syntax:
let remove = "string"
deskArray.splice(deskArray.indexOf(remove), 1);
*/
function RemoveSpec() {
  let newArr = Object.assign([], arr);
  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] == "Boo") {
      newArr.splice(i, 1);
    }
  }
  console.log(newArr);
}

RemoveSpec();

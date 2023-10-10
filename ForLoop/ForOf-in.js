/*for (..in) loop: The JavaScript for (..in) statement loops through the enumerable properties of an object. The loop will iterate over all enumerable properties of the object itself and those the object inherits from its constructor’s prototype.

Syntax
for (variable in object)
  statement
Example
*/
let person = {
  firstName: "Sankalp",
  lastName: "Haritash",
  rank: 43,
};
let userId = "";
let i;
for (i in person) {
  userId += person[i];
}
console.log(userId);

// Output: As you can see the for (..in) loop iterate over only the properties or the values of the dictionary object.
/*
A Computer Science Portal for Geeks 43
for (..of) loop: This for (..of) statement lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.

Syntax
for (variable of iterable) {
  statement
}
Example:
*/

let text = ["Sankalp", " Haritash ", "43"];
let userId1 = "";
let j;
for (j of text) {
  userId1 += j;
}
console.log(userId1);
/*
Output: As you can see the for (..of) loop iterate over only the content of the Array object.
GeeksforGeeks A Computer Science Portal for Geeks 43
*/

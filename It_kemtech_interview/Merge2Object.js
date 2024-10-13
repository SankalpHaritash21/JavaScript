/*
Write a JavaScript function mergeObjects that merges two objects and returns the result. If the objects have the same key, the value from the second object should overwrite the value from the first.
*/

function mergeObjects(obj1, obj2) {
  // Merge two objects; if keys are the same, values from obj2 will overwrite obj1
  return { ...obj1, ...obj2 };
}

let x = {
  fname: "A",
  lname: "B",
  Skill: "Java, JavaScript",
};

let y = {
  fname: "P", // This will overwrite fname from x
  lname: "Q",
  PhoneNo: 1234567,
};

console.log(mergeObjects(x, y)); // {fname: "P", lname: "Q"}

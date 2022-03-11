// Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
// Associative arrays are sometimes called maps because a key (string) maps to a value 

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];

function zipArraysIntoMap(keys, values) {
    var maps = {}
    if (keys.length == values.length) {
      for (i = 0; i < keys.length; i++) {
        maps[keys[i]] = values[i];
      }
    }
    return maps;
  }
  
  console.log(zipArraysIntoMap(keys1, vals1))

// Invert Hash
// A hash table / hash map is an obj / dictionary
// Given an object / dict,
// return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };

function invertObj(obj) {
    var new_object = {}
    for (i = 0; i < obj.length; i++ ){
        new_object = [obj[i]]
    }
    return new_object
}
console.log(invertObj(obj1));


const expected2 = { Zaphod: "name", high: "charm", dicey: "morals" };

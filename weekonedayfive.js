//Make a variable for result empty array
//Loop given array
//Get the last index of the  given array
//Push that last index into result
function reverse(arr) {
    var result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result)
}
reverse(["a", "b", "c", "d", "e"])
// Part 2
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
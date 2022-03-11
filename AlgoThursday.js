// Always Hungry

// Create a function that accepts an array
// and prints "yum!" each time one of the 
// values of the array is equal to "food"

// if no values are equal to "food"
// print "i'm hungry!" once.


// Given: [1, "food", "hello", true, "food"]
// output
// yum!
// yum!


// Given: ["hello", "world", 40]
// output
// i'm hungry!

//I did this.
function hungryOrNot(arr){
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i]=="food"){
            console.log("Yum!")
        }
        else {
            console.log("I am hungry")
        }
    }
}
hungryOrNot([1, "food", "hello", true, "food"])

//correct solution.
function hungry(arr){
    var stillHungry = true;
    for(var i = 1; i < arr.length; i ++){
        if (arr[i]==="food"){
            console.log("yum")
            stillHungry = false
        }
    }
    if(stillHungry){
        console.log("I'm hungry")
    }
}
hungry(["hello", "world", 40])

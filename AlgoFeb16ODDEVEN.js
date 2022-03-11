function oddEven(arr){
    var odds = 0
    var evens = 0
    for(var i=0; i<arr.length; i++) {
        if(arr[i]%2===0){
            evens++
            odds=0
        }
        else {
            odds++
            evens=0
        }
        if(odds==3){
            console.log("that is odd")
            odds=0
        }
        if(evens==3){
            console.log("even more so")
            evens=0
        }
    }
}
oddEven([1,1,1,3,4,5])
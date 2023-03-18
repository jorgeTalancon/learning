var sampleArray = [1,2,8];


var incrementLastArrayElement = function(_array) {
    var newArray = [];    
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    /* Solucion 1
    newNumber = _array[_array.length-1]+1;
    _array[_array.length-1] = newNumber;
    newArray = _array */
    
    // Solucion 2
    newNumber = _array.pop();
    _array.push(newNumber+1);
    newArray = _array;
    return newArray;

};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
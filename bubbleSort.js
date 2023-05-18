function bubbleSort(array) {
    let swapped;

    do {
        swapped = false;

        for(let i = 0; i < array.length; i++) {
            if(
                array[i + 1] &&         
                array[i] > array[i + 1] 
            ) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];

                swapped = true;  
            }
        }
    } while(swapped);

    return array;
}

(function test() {
    const testArray1 = [4, 5, 2, 1, 3, 8]
    const testArray2 = [5, 5, 6, 100, 3, 5, 2, 1, 5, 7, 8888, 4]
    const testArray3 = [2, 1]

    console.log(bubbleSort(testArray1))
    console.log(bubbleSort(testArray2))
    console.log(bubbleSort(testArray3))
})()
function twoSum(numbers: number[], target: number): number[] {
    let indicies: number[] = [];
    let firstPointer: number = 0;
    let secondPointer: number = 0;

    // Traverse first pointer through array
    for (let i = 0; i <= numbers.length - 1; i++) {
        firstPointer = numbers[i];
        // Traverse second pointer through array
        for (let j = i + 1; j <= numbers.length - 1; j++){
            // Start second pointer one value after first pointer each evaluation
            secondPointer = numbers[j];
            // If the first pointer value + second pointer value equals target, append index
            if (firstPointer + secondPointer == target){ 
                indicies.push(i + 1, j + 1);
            }
        }
    }


    return indicies;
};
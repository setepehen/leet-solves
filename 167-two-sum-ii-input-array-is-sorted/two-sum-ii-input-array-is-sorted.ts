function twoSum(numbers: number[], target: number): number[] {
    let indicies: number[] = [];
    let firstPointer: number = 0;
    let secondPointer: number = numbers.length - 1;
    let sum = 0;

    // Until the pointers are next to each other, repeat their maneuvering
    while (firstPointer < secondPointer) {
        // find the sum of the pointers and test it against the target value
        sum = numbers[firstPointer] + numbers[secondPointer]
        if (sum == target){
            // If the match exists, resturn the indicies
            indicies.push(firstPointer + 1, secondPointer + 1)
            return indicies
        } else {
            // If the target is greater, move the left (lower) pointer up
            if (target > sum) {
                firstPointer++
            // If the target is less, move the right (upper) pointer down
            } else {
                secondPointer--
            }
        }
    }
    return indicies;
};
function twoSum(numbers: number[], target: number): number[] {
    let indicies: number[] = [];
    let firstPointer: number = 0;
    let secondPointer: number = numbers.length - 1;
    let sum = 0;

    while (firstPointer < secondPointer) {
        sum = numbers[firstPointer] + numbers[secondPointer]
        if (sum == target){
            indicies.push(firstPointer + 1, secondPointer + 1)
            return indicies
        } else {
            if (target > sum) {
                firstPointer++
            } else {
                secondPointer--
            }
        }
    }
    return indicies;
};
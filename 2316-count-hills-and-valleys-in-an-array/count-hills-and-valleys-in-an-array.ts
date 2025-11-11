function countHillValley(nums: number[]): number {
    let hillsAndValleys: number = 0;
    let testArray: number[] = [];
    let cleanedArray = removeDuplicates(nums);
    // Traverse nums array
    for (let i = 1; i < cleanedArray.length - 1; i++) {
        // If the current i is less than before and after, increment hillsAndValleys total
        if (cleanedArray[i - 1] > cleanedArray[i] && cleanedArray[i + 1] > cleanedArray[i]){
            hillsAndValleys++;
        } else if (cleanedArray[i - 1] < cleanedArray[i] && cleanedArray[i + 1] < cleanedArray[i]){
            hillsAndValleys++;
        }
    }
    return hillsAndValleys
};

// Remove duplicate values for easier eval of new hill or valley
function removeDuplicates(nums: number[]): number[]{

    let removedDupes: number[] = [];

    for (let i = 0; i < nums.length; i++){
        if (nums[i] != nums[i + 1]){
            removedDupes.push(nums[i])
        }
    }
    return removedDupes;
}

// We can't remove duplicates from the entire array, that would impact unrelated hills and valleys
// Eval at i -1 and +1, if +1 is duplicate, i +1. No need to go backwards because that will just eval to the same hill/valley
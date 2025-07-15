function searchInsert(nums: number[], target: number): number {
    // Define low point and high point to be traversed and searched
    let low = 0;
    let high = nums.length - 1;


    // As long as the low point of the currently searched array is less than or equal to the high point, continue to run the loop
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        // If the current nums array midpoint value at the current index is equal to the target, return the target value
        if (nums[mid] === target){
            return mid
        // If the midpoint value at the index is lower than the target, set the low point to the previous midpoint as a new bound and re-evaluate the new array
        } else if (nums[mid] < target){
            low = mid + 1;
        // If the midpoint value at the index is higher than the target, set the high point to the previous midpoint as a new bound and re-evaluate the new array
        } else {
            high = mid - 1;
        }
    }
     return low;
};
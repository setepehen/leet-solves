function containsDuplicate(nums: number[]): boolean {
    
    // define map
    let numsMap = new Map<number, number>();

    // traverse given array
    for (let i = 0; i < nums.length; i++) {
        // if the map contains the current number, return true
        if (numsMap.has(nums[i])) {
            return true
            // if the map doesn't already contain the number, add it to the map i => array value
        } else if (!numsMap.has(nums[i])) {
            numsMap.set(nums[i], i);
        } 
    }
    // return false if no duplicates were found in the map
    return false
};
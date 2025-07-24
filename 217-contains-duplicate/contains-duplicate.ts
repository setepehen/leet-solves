function containsDuplicate(nums: number[]): boolean {

    // O(n) time O(n) space
    
    // define set
    let numsSet = new Set<number>();

    // traverse given array
    for (let i = 0; i < nums.length; i++) {
        // if the set contains the current number, return true
        if (numsSet.has(nums[i])) {
            return true
            // if the set doesn't already contain the number, add it to the set
        } else {
            numsSet.add(nums[i]);
        } 
    }
    // return false if no duplicates were found in the set
    return false
};
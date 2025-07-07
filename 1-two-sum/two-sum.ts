function twoSum(nums: number[], target: number): number[] {
    // store number -> index mapping
    const hash = new Map<number, number>();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        // Check if complement exists in hash table
        if (hash.has(target - num)) {
            // If found, return indices of both numbers
            return [hash.get(target - num)!, i];
        }
        
        // Store current number and its index in hash table
        hash.set(num, i);
    }
    
    // Return empty array if no solution found
    return [];
}
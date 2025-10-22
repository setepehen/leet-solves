function productExceptSelf(nums: number[]): number[] {
let leftProducts: number[] = nums.map(() => 1);
let rightProducts: number[] = nums.map(() => 1);
let result: number[] = [];

// Calculate left
for (let i = 1; i < nums.length; i++){
    leftProducts[i] = nums[i-1] * leftProducts[i-1];
}

// Calculate right
for (let i = nums.length - 2; i >= 0; i--){
    rightProducts[i] = nums[i+1] * rightProducts[i+1];
}

// Combine the left and right at each index
for( let i = 0; i < nums.length; i++){
    result[i] = leftProducts[i]*rightProducts[i];
}

return result
};
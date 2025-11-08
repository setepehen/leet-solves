function maxAdjacentDistance(nums: number[]): number {
    let curMax: number = Math.abs(nums[0] - nums[nums.length - 1]);
    let curEval: number = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        curEval = Math.abs(nums[i] - nums[i+1])
        if (curEval > curMax) {
            curMax = curEval
        }
    }

    return curMax
};
function topKFrequent(nums: number[], k: number): number[] {

    let nMap = new Map<number, number>();
    // myMap.set(current number, myMap.get(current number) + 1)

    let returnArray: number[] = [];

    for (let i = 0; i < nums.length; i++) {
         if (!nMap.has(nums[i])) {
            nMap.set(nums[i], 1);
        // If the map does contain the value, increment the frequency by 1
        } else {
            nMap.set(nums[i], nMap.get(nums[i])! + 1);
        }
    }

    console.log("MAP", nMap);

    // Start with a the max value that an accumulated integer value could be, which is the length of the entire array
    // Decrement that value until a match value is found in the map, add that value's key to the return array  
    let i = nums.length
    let j = 0;

   while (j < k && i >= 0) {
    for (let val of nMap.values()) {
        if (val === i) {
            returnArray.push(getKey(nMap, val));
            console.log("NEW VAL", val);
            j++;
        }
   }
    i--;
}
return returnArray;

};


// Function to return the key of the given value
// Value should be the i value that is being searched for in the map
// If the value is found return the key and add it to the return Array
function getKey(map: Map<number, number>, valueToFind: number): number | undefined {
    for (let [key, value] of map.entries()) {
        if (value === valueToFind) {
            map.delete(key); // remove it so it's not reused
            return key;
        }
    }
    return undefined; // just in case no matching value is found
}
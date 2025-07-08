// Define Roman numeral Map for added values
let numeralMapSingles = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);

// Define Roman numeral map for subtracted values
let numeralMapDoubles = new Map<string, number>([
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
])

function romanToInt(s: string): number {
// Store string in array format
let numeralArray: string[] = s.split('');
let numeralTotal: number = 0;

// Traverse through numeralArray
for (let i = 0; i < numeralArray.length; i++){
    // If subtraction array contains the current array value and the proceeding value, add it to the numeral total
    if (numeralMapDoubles.has(numeralArray[i]+numeralArray[i+1])) {
        numeralTotal += numeralMapDoubles.get(numeralArray[i]+numeralArray[i+1])
        // Add one to iterator to avoid evaluation of proceeding numeral value
        i++
    } else {
        // If the value doesn't contain a proceeding numeral value that would create a subtraction combo, simply add the value
    numeralTotal += numeralMapSingles.get(numeralArray[i]);
    }
}
return numeralTotal;
};
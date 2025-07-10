function longestCommonPrefix(strs: string[]): string {
    // Sort strings to ensure the greatest difference exists between the first and last string value in the array
    let sortedList = strs.sort();

    // Store each character in the first and last strs array values
    const firstEval: string[] = strs[0].split('');
    const lastEval: string[] = strs[strs.length - 1].split('');

    let prefix: string = '';


        // Traverse first array value
        for(let i = 0; i < firstEval.length; i++){
            // Compare it to the last value in the strs array and evaluate if the characters are the same
            if (firstEval[i] == lastEval[i]) {
                // If so, add the character to the prefix string
                prefix += firstEval[i];
            } else {
                // If a match doesn't exist, immediately end the comparison
                break;
            }
        }
    
    return prefix;
};
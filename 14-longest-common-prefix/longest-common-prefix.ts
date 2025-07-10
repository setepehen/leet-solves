function longestCommonPrefix(strs: string[]): string {
    let sortedList = strs.sort();

    const firstEval: string[] = strs[0].split('');
    const lastEval: string[] = strs[strs.length - 1].split('');

    let prefix: string = '';


        // Traverse first evaluated array value and compare to current array value
        for(let i = 0; i < firstEval.length; i++){
            if (firstEval[i] == lastEval[i]) {
                prefix += firstEval[i];
            } else {
                break;
            }
        }
    

    return prefix;
};
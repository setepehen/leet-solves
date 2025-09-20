function isPalindrome(s: string): boolean {

    // prep the new string for traversal \
    let lcs = s.toLowerCase().replace(/[^0-9a-z]/gi, '');
    
    let start: number = 0;
    let end: number = lcs.length - 1;

    while (start <= end) {
        if (lcs[start] == lcs[end]){
            start++
            end--
        } else {
            return false
        }
    }

    return true
};
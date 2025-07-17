function lengthOfLastWord(s: string): number {
    let Word: string = ' ';
    let Length: number = 0;
    let preWhiteSpace: boolean = false;

    for (let i = 0; i < s.length; i++ ) {
        // Determine if the non-space character had a space before it
        if (s[i] != ' ' && preWhiteSpace == false) {
            Word += s[i];
            Length++;
        // If non-space character had space before it, this word is the last word so far in the string traversal
        } else if (s[i] != ' ' && preWhiteSpace == true) {
            // Since word had space before it, reset the Word and Length variables to accept new entries for the latest word
            Word = ' ';
            Length = 0;
            Word += s[i];
            Length++;
            // Set space to false to ensure the current word isn't reset again
            preWhiteSpace = false;
        } else if (s[i] == ' ') {
            preWhiteSpace = true;
        }
    } 
    console.log("The last word is", Word, "with length", Length);
    return Length;
};
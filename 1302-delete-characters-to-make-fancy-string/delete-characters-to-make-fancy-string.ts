function makeFancyString(s: string): string {

    let repeatCount: number = 0;

    let fancyString: string = '';

    for(let i = 0; i < s.length; i++){
        // Determine if the current character is the same as the next, if so, add it to the string and increase repeat count
       if (s[i] == s[i+1] && repeatCount < 1) {
        repeatCount++
        fancyString += s[i];
        // If the next character is not the same as the current, add it to the string and reset repeat count
       } else if (s[i] != s[i+1]) {
        repeatCount = 0;
        fancyString += s[i];
       }
    }
    return fancyString;
};
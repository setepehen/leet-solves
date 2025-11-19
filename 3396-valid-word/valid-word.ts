function isValid(word: string): boolean {
    
// Define character classes to check against

let vowelCheck =/^(?=.*[aeiouAEIOU])[A-Za-z0-9]{3,}$/
let consonantCheck =/[qwrtypsdfghjklzxcvbnm]/i

// Run checks

if (vowelCheck.test(word) && consonantCheck.test(word)) {
    return true
} else {
    return false
}

};
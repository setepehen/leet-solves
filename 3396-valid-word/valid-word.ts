function isValid(word: string): boolean {
    
let vowelCheck =/^(?=.*[aeiouAEIOU])[A-Za-z0-9]{3,}$/
let consonantCheck =/[qwrtypsdfghjklzxcvbnm]/i

if (vowelCheck.test(word) && consonantCheck.test(word)) {
    return true
} else {
    return false
}

};
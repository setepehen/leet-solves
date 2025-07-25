function isAnagram(s: string, t: string): boolean {

    // time O(n), space O(n)

    let sMap = new Map<string, number>();
    let tMap = new Map<string, number>();

    // If strings are not the same length, they cannot be anagrams
    if (s.length !== t.length) {
        return false
    }

    // Traverse "s" string since at this point in the code, "s" and "t" are the same length
    for (let i = 0; i < s.length; i++) {
        // If the map does not contain the value, add it and set the frequency to 1
        if (!sMap.has(s[i])) {
            sMap.set(s[i], 1);
        // If the map does contain the value, increment the frequency by 1
        } else {
            sMap.set(s[i], sMap.get(s[i])! + 1);
        }
        // Repeat process for "t" string values
        if (!tMap.has(t[i])) {
            tMap.set(t[i], 1);
        } else {
            tMap.set(t[i], tMap.get(t[i])! + 1);
        }
    }
    // Evaluate map values to ensure they match
    for (let [key, val] of sMap) {
        // Access map values based on the key provided
        if (sMap.get(key) !== tMap.get(key)) {
            return false
        }
    }
    return true
};
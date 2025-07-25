function isAnagram(s: string, t: string): boolean {

    let sMap = new Map<string, number>();
    let tMap = new Map<string, number>();

    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if (!sMap.has(s[i])) {
            sMap.set(s[i], 1);
        } else {
            sMap.set(s[i], sMap.get(s[i])! + 1);
        }
        if (!tMap.has(t[i])) {
            tMap.set(t[i], 1);
        } else {
            tMap.set(t[i], tMap.get(t[i])! + 1);
        }
    }

    for (let [key, val] of sMap) {
        if (sMap.get(key) !== tMap.get(key)) {
            return false
        }
    }

    return true
};
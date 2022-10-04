function palindrome(str) {
    // replace all non-alphanumeric characters with ""
    let cleanStr = str.replace(/[^a-z0-9+]+/gi, "");
    // make all characters lowercase, splits each character, makes a list
    let splitStr = cleanStr.toLowerCase().split("");
    // join the list together
    let origStr = splitStr.join("");

    let reverseStr = "";
    // for each letter in origStr, add each letter backwards to reverseStr
    for (let i = origStr.length - 1; i >= 0; i--) {
        reverseStr += origStr[i];
    }

    // compare origStr to reverseStr
    if (origStr === reverseStr) {
        return true
    } else {
        return false
    }
}

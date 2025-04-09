const palindromes = function (s) {
    // Remove all non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

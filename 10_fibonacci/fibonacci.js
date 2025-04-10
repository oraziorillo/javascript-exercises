const fibonacci = function(n) {
    // Check if n is a string
    if (typeof n === 'string') {
        // Convert string to number
        n = parseInt(n);
    }
    if (n < 0) {
        return "OOPS";
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let first = 0;
    let second = 1;
    for (let i = 2; i < n + 1; i++) {
        let curr = first + second;
        first = second;
        second = curr;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;

const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return 'ERROR';
    }

    if (a > b) {
        let tmp = a;
        a = b;
        b = tmp;
    }
    let sum = 0;
    for (let i = a; i < b + 1; i++) {
        sum += i
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

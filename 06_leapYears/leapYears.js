const leapYears = function(year) {
    if (!Number.isInteger(year) || year < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(year / 4)) {
        return false;
    }
    if (Number.isInteger(year / 10) && !Number.isInteger(year / 40)) {
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = leapYears;

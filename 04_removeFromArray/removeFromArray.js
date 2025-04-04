const removeFromArray = function(arr, ...args) {
    result = [];
    for (let i = 0; i < arr.length; i++) {
        let push = true;
        for (const el of args) {
            if (arr[i] === el) {
                push = false;
                break;
            }
        }
        if (push) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

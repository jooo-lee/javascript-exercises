const removeFromArray = function(originalArr, ...removalArr) {
    for (const elem of removalArr) {
        let index = originalArr.indexOf(elem);
        if (index > -1) originalArr.splice(index, 1);
    }
    return originalArr;
};

// Do not edit below this line
module.exports = removeFromArray;

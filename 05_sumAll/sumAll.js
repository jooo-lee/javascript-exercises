const sumAll = function(num1, num2) {
    if (
        !Number.isInteger(num1) || !Number.isInteger(num2) || 
        num1 < 0 || num2 < 0
    ) return 'ERROR';
    let sum = 0;
    let smaller, bigger;
    if (num1 <= num2) {
        smaller = num1;
        bigger = num2;
    } else {
        smaller = num2;
        bigger = num1;
    }
    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

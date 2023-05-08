const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currPerson) => {
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currPersonAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
        return oldestPersonAge > currPersonAge ? oldestPerson : currPerson;
    });
};

const getAge = function(yearOfBirth, yearOfDeath) {
    if (!yearOfDeath) {
        return new Date().getFullYear() - yearOfBirth;
    }
    return yearOfDeath - yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;

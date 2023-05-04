const palindromes = function (str) {
    // let punctuation = /[\.,?!\s]/g;
    // let newStr = str.replace(punctuation, "").toLowerCase();
    // let revStr = newStr.split("").reverse().join("");
    // return newStr === revStr;

    let processedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    return processedStr.split("").reverse().join("") === processedStr;

    // Convert string to lowercase
    // Get rid of all punctuation and white space using RegEx
    // Split into array
    // Reverse array
    // Join array 
    // Compare strings
};

// Do not edit below this line
module.exports = palindromes;

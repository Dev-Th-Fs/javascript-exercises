const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '')
    return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
};

console.log(palindromes("A car, a man, a maraca"));


// Do not edit below this line
module.exports = palindromes;

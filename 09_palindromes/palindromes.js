const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    return str.split("").reverse().join("") === str;
};

console.log(palindromes("A car, a man, a maraca"));


// Do not edit below this line
module.exports = palindromes;

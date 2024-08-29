const reverseString = function(string) {
    const myArray= string.split("");
    const newArray=myArray.reverse().join("");

    return newArray;
};


// Do not edit below this line
module.exports = reverseString;

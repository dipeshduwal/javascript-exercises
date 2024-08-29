const fibonacci = function(countArg) {
    let count;
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let sequence = [0, 1];

    for (let i=2; i<=count; i++){
        sequence[i]= sequence[i-1]+sequence[i-2];
    }

    return sequence[count];

};

// Do not edit below this line
module.exports = fibonacci;

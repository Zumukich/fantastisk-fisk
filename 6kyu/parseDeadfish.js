function parseDeadfish(data) {
    var value = 0;
    var returnArr = [];
    for (var i = 0; i < data.length; i++) {
        switch (data[i]) {
            case "i":
                value += 1;
                break;
            case "d":
                value -= 1;
                break;
            case "s":
                value = Math.pow(value, 2);
                break;
            case "o":
                returnArr.push(value);
                break;
        }
    }
    return returnArr;
}

function parseDeadfish2(str) {
    var result = 0;
    var retVal = [];
    str.split("").forEach(element => {
        switch (element) {
            case "i":
                result++;
                break;
            case "d":
                result--;
                break;
            case "s":
                result *= result;
                break;
            case "o":
                retVal.push(result);
                break;
        }
    });
    return retVal;
}

// From: https://www.codewars.com/kata/make-the-deadfish-swim/
// 6 kyu

console.log(parseDeadfish("iiixsdoxso"));
console.log(parseDeadfish2("iiixsdoxso"));

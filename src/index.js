const numberToRead = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
};

const hundred = 100;

function nameFn(num) {
    let arrayNum = [];

    if (num < 100) {
        if (Object.keys(numberToRead).includes(String(num))) {
            arrayNum = [num];
        } else {
            arrayNum = [num - num % 10, num % 10];
        }
    } else if (num > 100) {
        if (num % 100 !== 0) {
            if (Object.keys(numberToRead).includes(String(num % 100))) {
                arrayNum = [Math.floor(num / 100), hundred, num % 100];
            } else {
                arrayNum = [Math.floor(num / 100), hundred, num % 100 - num % 10, num % 10];
            }
        } else if (num % 100 === 0) {
            arrayNum = [Math.floor(num / 100), hundred];
        }
    } else {
        arrayNum = [Math.floor(num / 100), hundred];
    }

    return arrayNum;
}

module.exports = function toReadable(number) {
    let arrayReadable = nameFn(number).map(function (item) {
        return numberToRead[item];
    });
    return arrayReadable.join(' ');
};

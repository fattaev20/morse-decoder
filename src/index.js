const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let expArr = expr.split('');
    let position = 10;
    let len = expArr.length;
    let comArr = [];
    let charArr = [];
    let morseArr = [];
    let morseArrDec = [];
    let str = '';

    //divide array into 10char components

    for (let i = 0; i < Math.trunc(len / 10); i++) {
        expArr.splice(position, 0, " ");
        position = position + 11;
    }

    // fill the last component with 0s
    let expStr = expArr.join('');
    expArr = expStr.split(' ');
    while (expArr[expArr.length - 1].length < 10) {
        expArr[expArr.length - 1] = '0' + expArr[expArr.length - 1];
    }

    for (let component of expArr) {
        comArr = component.split('');
        let i = 0;
        while (i < 10) {
            charArr.push(comArr[i] + comArr[i + 1]);
            i += 2;
        }
    }

    for (let i = 0; i < charArr.length; i += 5) {
        const chunk = charArr.slice(i, i + 5);
        morseArr.push(chunk);
    }
    console.log(morseArr)

    for (let character of morseArr) {
        for (let item of character) {
            if (item === '10') {
                character.push('.');
            }
            if (item === '11') {
                character.push('-');
            }
            if (item === '00') {
                character.push('');
            }
            if (item === '**') {
                character.push('s');
            }
        }
        character.splice(0, 5);
        let charDec = character.join('');
        morseArrDec.push(charDec);
    }

    console.log(morseArrDec);

    for (let code of morseArrDec) {
        for (let key in MORSE_TABLE) {
            if (code == key) {
                str = str + MORSE_TABLE[key];
            }
        }
        if (code == 'sssss') {
            str = str + ' ';
        }
    }


    return str;
}


module.exports = {
    decode
}
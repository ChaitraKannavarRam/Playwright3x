const string = require('fs').readFileSync(0, 'utf8').trim();


    if(string.length === 0) {   
        console.log('Please enter a valid string.');
    } else {
        const reversedString = Array.from(string).reverse().join('');
        if(string === reversedString) {
            console.log('The string is a palindrome.');
        } else {
            console.log('The string is not a palindrome.');
        }
    }
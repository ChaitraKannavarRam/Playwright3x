const inputString = require('fs').readFileSync(0,'utf8').trim().replaceAll(" ", "");;

if(inputString.length == 0 || !/^[a-zA-Z]+$/.test(inputString)){
    console.log('Enter a valid input String')
}
else{
    let vowelCount = 0;
    let input = inputString.toLowerCase();
    for(let i=0;i<input.length;i++){
        if('aeiou'.includes(input[i])){
            vowelCount+=1;
        }
    }

    console.log("Vowel count is ", vowelCount);
}
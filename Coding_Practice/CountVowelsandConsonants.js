let str = "Hello World 5!";
const cleanStr = str.toLowerCase().replaceAll(" ", "");

let vowels = 0, consonants = 0;

for (const char of cleanStr) {
    if ("aeiou".includes(char)) {
        vowels++;
    } else if (char >= "a" && char <= "z") {
        consonants++;
    }
}

console.log(`Vowels: ${vowels}\nConsonants: ${consonants}`);



// const str = "Hello World 5!";

// // i flag makes it case-insensitive, g flag finds all matches
// const vowels = (str.match(/[aeiou]/gi) || []).length;
// const consonants = (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;

// console.log(`Vowels: ${vowels}\nConsonants: ${consonants}`);


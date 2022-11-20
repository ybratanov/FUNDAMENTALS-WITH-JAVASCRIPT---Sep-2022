// function modernTimes(str) {
//     let splitBySpace = str.split(' ')
//     for(let i = 0; i < splitBySpace.length; i++) {
//         if(splitBySpace[i].startsWith('#') && !checkForNumber(splitBySpace[i]) &&
//         splitBySpace[i].length > 1) {
//             console.log(splitBySpace[i].substring(1));
//         }
//     }

//     function checkForNumber(word) {
//     let characters = word.split('')
//     for(let j = 0; j < characters.length; j++) {
//         if(!isNaN(characters[j])) {
//             return true;
//         }
//     }
//     return false;
//     }

//     }

//     modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')

function modernTimes(string) {
    const words = string.split(' ');
    words.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;
        if (isValidWord) {
            let isLetter = true;
            let wordCopy = '';
            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[index];
                }
            }
            if (isLetter) {
                console.log(wordCopy);
            }
        }
    });

}
modernTimes(`Nowadays everyone uses # to tag a #special word in #socialMedia`)
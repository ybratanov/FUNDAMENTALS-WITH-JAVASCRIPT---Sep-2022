// function splitter(str) {
//     let arrOfWords = []
//     let word = ''

//     for (let i = 0; i < str.length; i++) {

//         if (str[i].toUpperCase() === str[i]) {
//             word += str[i]
//         } else if (str[i].toLowerCase() === str[i]) {
//             word += str[i]
//         }

//         if (str[i + 1] != null) {
//             if (str[i + 1].toUpperCase() === str[i + 1]) {
//                 arrOfWords.push(word)
//                 word = ''
//             }
//         } else {
//             for (let j = str.length - 1; j >= 0; j--) {
//                 if (str[j].toUpperCase() === str[j]) {
//                     let index = j;
//                     let lastWord = str.substring(index)
//                     arrOfWords.push(lastWord)
//                     break;
//                 }
//             }
//         }

//     }
//     console.log(arrOfWords.join(', '));
// }
function splitter(text) {

    let result = text[0];
    let lower = text.toLowerCase();

    for (let index = 1; index < text.length; index++) {
        if (text[index] !== lower[index]) {
            result += ', ';
        }
        result += text[index]
    }
    console.log(result);
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
splitter('HoldTheDoor')

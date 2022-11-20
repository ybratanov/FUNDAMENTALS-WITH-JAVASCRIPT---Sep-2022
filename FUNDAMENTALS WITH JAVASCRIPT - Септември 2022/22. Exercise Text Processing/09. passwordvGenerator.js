// function passwordGenerator(input) {
//     let firstString = input.shift()
//     let secondString = input.shift()
//     let word = input.shift().toUpperCase()
//     let index = 0;
//     let newStr = firstString.concat(secondString).split('')

//     for (let i = 0; i < newStr.length; i++) {

//         if (newStr[i] === 'a' || newStr[i] === 'i' ||
//             newStr[i] === 'e' || newStr[i] === 'u' ||
//             newStr[i] === 'o') {
//             newStr[i] = word[index]
//             index++
//             if (index === word.length) {
//                 index = 0;
//             }
//         }

//     }

//     let password = newStr.reverse().join('')
//     console.log(`Your generated password is ${password}`);
// }
function passwordGenerator(input) {

    let password = (input[0] + input[1]).toLocaleLowerCase();
    let key = input[2].toLocaleUpperCase();
    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    let currentKeyIndex = 0;

    for (const char of password) {
        if (vowelLetters.includes(char)) {
            password = password.replace(char, key[currentKeyIndex++])
            if (key[currentKeyIndex] === undefined) {
                currentKeyIndex = 0;
            }
        }
    }
    let finalPassword = password
        .split('')
        .reverse()
        .join('');

    console.log(`Your generated password is ${finalPassword}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
])

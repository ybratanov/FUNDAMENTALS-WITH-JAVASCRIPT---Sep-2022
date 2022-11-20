// function replaceRepeatingChars(str) {
//     let index = 0;
//     let uniqueChars = ''

//     while (index < str.length) {
//         if (str[index] !== str[index + 1]) {
//             uniqueChars += str[index]
//         }
//         index++
//     }
//     console.log(uniqueChars);
// }

function replaceRepeatingChars(input) {

    let result = input[0];

    for (let index = 1; index < input.length; index++) {
        const current = input[index];
        const prev = input[index - 1];

        if (current !== prev) {
            result += current
        }
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')
// function cutAndReverse(str) {
//     let strLength = str.length;
//     let middlePoint = strLength / 2;
//     let firstHalf = str.substring(0,middlePoint)
//     let secondHalf = str.substring(middlePoint,strLength)
//     reverseText(firstHalf)
//     reverseText(secondHalf)

//     function reverseText(text) {
//         let result = ''
//         for(let i = text.length-1; i >= 0; i --) {
//             result += text[i]
//         }
//         console.log(result);
//     }
//     }

function cutAndReverse(text) {
    const middle = text.length / 2;

    const firstPart = text
        .substring(0, middle)
        .split('')
        .reverse()
        .join('');

    const secundPart = text
        .substring(middle)
        .split('')
        .reverse()
        .join('');

    console.log(firstPart);
    console.log(secundPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
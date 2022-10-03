function latinLetters (num){
 
 
    for (let i = 0; i < num; i++){
        let firstChar = String.fromCharCode(97 + i);
 
        for (let k = 0; k < num; k++){
            let secondChar = String.fromCharCode(97 + k);
            for (let m = 0; m < num; m++){
                let thirdChar = String.fromCharCode(97 + m);
                console.log(`${firstChar}${secondChar}${thirdChar}`)
            }
        }
    }
 
}
 
latinLetters ('3')
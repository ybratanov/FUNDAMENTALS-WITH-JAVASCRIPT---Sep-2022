function triangleOfNumbers(num) {

    for (let row = 1; row <= num; row++) {
        let printeLIne = '';
        for ( let col = 1; col <= row; col++){
            printeLIne+=`${row} `
        }
        console.log(printeLIne);
    }


}
triangleOfNumbers(5);
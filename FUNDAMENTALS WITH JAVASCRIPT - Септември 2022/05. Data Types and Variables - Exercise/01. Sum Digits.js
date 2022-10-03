function sumDigits(number){

    let numberAsString = number.toString();
    let sumOfDigits = 0;
    let numberOfDigits = numberAsString.length;

    for(let index = 0; index < numberOfDigits; index++){
        let currentDigit = Number(numberAsString[index]);
        
        sumOfDigits += currentDigit;
    }
    console.log(sumOfDigits);

}
sumDigits(245678);
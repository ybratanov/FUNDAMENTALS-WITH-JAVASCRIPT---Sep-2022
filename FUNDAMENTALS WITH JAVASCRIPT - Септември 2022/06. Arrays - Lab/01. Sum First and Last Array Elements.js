function firstAndLastArrayElements(number){
    let firstElement = number[0]
    let lastElement = number[number.length - 1]
    
    let sum = firstElement + lastElement;
    console.log(sum);
}
firstAndLastArrayElements([20, 30 ,40]);
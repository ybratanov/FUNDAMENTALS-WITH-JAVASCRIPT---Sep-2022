function calculator(firstNum, operator, secoundNum) {

    let result = 0;

    switch (operator) {
        case '+': result = firstNum + secoundNum;
            break;
        case '-': result = firstNum - secoundNum;
            break;
        case '*': result = firstNum * secoundNum;
            break;
        case '/': result = firstNum / secoundNum;
            break;

    }
    console.log(result.toFixed(2));
}
calculator(5,
    '+',
    10
)
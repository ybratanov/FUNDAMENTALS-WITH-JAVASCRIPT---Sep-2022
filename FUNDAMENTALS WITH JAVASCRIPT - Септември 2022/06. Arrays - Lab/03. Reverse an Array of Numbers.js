function arrayofNumbers(n, arry){

    let result = [];
    for (let i = 0 ; i < n ; i ++){
        result[n - 1 - i]=arry[i];
    }
    console.log(result.join(' '));
}
arrayofNumbers(3, [10, 20, 30, 40, 50]);
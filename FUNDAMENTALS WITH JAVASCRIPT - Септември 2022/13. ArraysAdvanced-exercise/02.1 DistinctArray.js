function distinctArray(arr){

    let uniqueNumberArray = [];
    let arrayLength = arr.length;

    for ( index = 0 ; index < arrayLength ;index ++ ){
        if (!uniqueNumberArray.includes(arr[index])){
            uniqueNumberArray.push(arr[index]);

        }
    }
    console.log(uniqueNumberArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
function rintAndSum(startNumber, endNumber) {

    let sumOfNum = 0;
    let printLine = '';
    for (let i = startNumber; i <= endNumber; i++) {
        sumOfNum+=i;
        if (i === endNumber){
            printLine+=`${i}`;
        }else{
            printLine+=`${i} `;
        }
        
    }
    console.log(printLine);
    console.log(`Sum: ${sumOfNum}`);
}
rintAndSum(5, 10);
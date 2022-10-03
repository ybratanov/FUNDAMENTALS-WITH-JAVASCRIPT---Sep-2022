function primeNumberChecker(number){
    
    if ( (number % 2 != 1 && number % number != 1)){
        console.log('false');
    }else{
        console.log('true');
    }

}
primeNumberChecker(7)
function requiredReading(numPages , rideHours , days){

    let totalTime = numPages / rideHours;
    let totalDay = totalTime / days;

    console.log(totalDay);

}
requiredReading(212, 20, 2);
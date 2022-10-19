function blackFlag(input) {

    const days = Number(input.shift());
    const daylyGain = Number(input.shift());
    const target = Number(input.shift());

    //variables - променливи с които следим колко е събрано през дните
    let totalPlunder = 0;

    // loop days
    for (let i = 1; i <= days; i++) {
        totalPlunder += daylyGain

        //3th day
        if (i % 3 == 0) {
            totalPlunder += daylyGain / 2
        }
        //5th day
        if (i % 5 == 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }

    //print output]
    if (totalPlunder >= target) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let procentage = (totalPlunder / target) * 100;
        console.log(`Collected only ${procentage.toFixed(2)}% of the plunder.`);
    }

}
blackFlag((["5",
    "40",
    "100"])
)
function triangleArea(sideA, sideB, sideC) {
    let halfPi = (sideA + sideB + sideC) / 2;
    let piram = halfPi * ((halfPi - sideA) * (halfPi - sideB) * (halfPi - sideC))
    console.log(Math.sqrt(piram));
}
triangleArea(2, 3.5, 4);

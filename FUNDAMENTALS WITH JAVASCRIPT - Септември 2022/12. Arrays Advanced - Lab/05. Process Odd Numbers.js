function processOddNumbers(number) {
    let result = number
        .filter((x, i) => (i + 1) % 2 === 0)
        .map(x => x * 2)
        .reverse();
        console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
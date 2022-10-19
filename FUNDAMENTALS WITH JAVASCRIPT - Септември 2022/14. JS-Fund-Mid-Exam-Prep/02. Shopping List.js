function shoppingList(input) {
    // Shoort let rawList = input.shift().split('!');
    let rawList = input.shift();
    let commands = input.slice();
    let shoppingList = rawList.split('!');
    let currentLine = commands.shift();

    //точната метод за завъртане на цикъл tuk e while (може и for-of)
    while (currentLine != 'Go Shopping!') {
        //TODO: build list = изграждане на списък
        let lineArgs = currentLine.split(' ');
        let command = lineArgs[0];
        let firstArgument = lineArgs[1];
        let secundArgument = lineArgs[2];

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(firstArgument)) {
                    shoppingList.unshift(firstArgument);
                }
                break;

            case 'Unnecessary':
                // shoppingList = shoppingList.filter(x => x != firstArgument) тук не мутира опцията създаваме нова функция за
                // да намерим нужната стойност

                let itemIndex = shoppingList.indexOf(firstArgument);
                if (itemIndex > -1) {
                    shoppingList.splice(itemIndex, 1);
                }
                break;

            case 'Correct':
                let updateIndex = shoppingList.indexOf(firstArgument);

                if (updateIndex > -1) {
                    shoppingList[updateIndex] = secundArgument;
                }
                break;

            case 'Rearrange':
                let removeIndex = shoppingList.indexOf(firstArgument);
                if (removeIndex > -1) {
                    let element = shoppingList[removeIndex];
                    shoppingList.splice(removeIndex, 1);
                    shoppingList.push(element);
                }
                break;


        }

        currentLine = commands.shift();

    }

    console.log(shoppingList.join(', '));
}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)
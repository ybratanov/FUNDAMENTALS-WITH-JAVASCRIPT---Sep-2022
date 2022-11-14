// function towns(input) {
//     let townPosition = {}
//     for (let i = 0; i < input.length; i++) {
//         let [town, latitude, longitude] = input[i].split(' | ')
//         townPosition['town'] = town;
//         townPosition['latitude'] = Number(latitude).toFixed(2);
//         townPosition['longitude'] = Number(longitude).toFixed(2);
//         console.log(townPosition);
//     }
// }

function towns (list){

    let townInfo = {};

    for (const line of list){
        let [townName , latitude , longitude] = line.split(' | ');
        townInfo.town = townName;
        townInfo.latitude = Number(latitude).toFixed(2);
        townInfo.longitude = Number(longitude).toFixed(2);

        console.log(townInfo);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

    'Beijing | 39.913818 | 116.363625'])
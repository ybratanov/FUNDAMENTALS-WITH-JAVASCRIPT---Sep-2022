function foreignLanguages(country) {

    switch (country) {
        case 'USA':
        case 'England':
            console.log("English");
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log("Spanish");
            break;
        default:
            console.log("unknown");
            break;
    }

}
foreignLanguages("USA");
foreignLanguages("England");
//English
foreignLanguages("Spain");
foreignLanguages("Argentina");
foreignLanguages("Mexico");
//Spanish
foreignLanguages("Germany");
foreignLanguages("Bulgaria");
//unknown

let men = [];
let women = [];

const getNames = () => {
    fetch('https://swapi.dev/api/people/')
    .then(response => {
        console.log(response);
        return response.json();
    }).then(response => {
        console.log(response);
        const results = response.results;
        filterResponse(results);
    });
}

const filterResponse = (results) => {
    results.map((actor) => {
        if(actor.gender === 'male'){
            men.push(actor.name)

        }else if(actor.gender === 'female') {
            women.push(actor.name)
        }
    })
    printNames()
}

const printNames = () => {
    console.log(`List of male actors: ${men.join(', ')}`)
    console.log(`List of female actors: ${women.join(', ')}`)
}

getNames()
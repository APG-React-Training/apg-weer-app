const url = "https://data.buienradar.nl/2.0/feed/json"


const fetchData = () => new Promise( (resolve, reject) => {

    fetch(url)
        .then( result => result.json() )
        .then( result => {
            resolve( result.actual?.stationmeasurements)
        })
        .catch( err => reject(err))

})

export { fetchData }
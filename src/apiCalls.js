function fetchZones() {
    return fetch('https://look-at-this-snake-api.onrender.com/api/v1/noSnakeZones')
}

function fetchSnakes() {
    return fetch('https://look-at-this-snake-api.onrender.com/api/v1/snakes')
}

function fetchData() {
  const allData = [fetchZones(), fetchSnakes()]

  return allData
}


function getData() {
    return Promise.all(fetchData())
        .then(responses => {
         if (responses.every(response => response.ok)) {
           return responses
         } else {
           throw new Error(`Ssssomething went wrong. Try again sssssooon!`)
         }
        })
        .then((res) => {
            return Promise.all(res.map((dataSet) => {
                return dataSet.json();
            }))
        })
         .catch(error => {
           let errorText = error.message
           throw new Error(`${errorText}`)
         })  
        }

        export { getData }
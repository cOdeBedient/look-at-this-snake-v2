function fetchZones() {
    return fetch('http://localhost:3000/api/v1/noSnakeZones/')
}

function fetchSnakes() {
    return fetch('http://localhost:3000/api/v1/snakes/')
}

function fetchData() {
  const allData = [fetchZones(), fetchSnakes()]

  return allData
}


function getData() {
    return Promise.all(fetchData())
        .then(responses => {
            console.log('responses', responses)
         if (responses.every(response => response.ok)) {
           return responses
         } else {
          //  let responseText = responses.find(response => !response.ok).statusText
          //  let responseCode = responses.find(response => !response.ok).status
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
          //  console.log('Fetch Error')
           throw new Error(`${errorText}`)
         })  
        }

        export { getData }
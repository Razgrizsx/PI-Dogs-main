export function getDogs(){
    return function(dispatch){
        return fetch('http://localhost:3001/dogs')
        .then(response => response.json())
        .then(dogs => {
            dispatch({type:'GET_DOGS', payload: dogs})
        })
    }
}

export function getDog(name){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs?name=${name}`)
        .then(response => response.json())
        .then(dog => {
            dispatch({type: 'GET_DOG', payload: dog})
        })
    }
}

export const dogDetails = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/dogs/${id}`)
        .then (response => response.json())
        .then (dog => dispatch({type: 'GET_DOG_DETAIL', payload: dog})
        )
    }
}

export function getTemperaments(){
    return function(dispatch){
        return fetch('http://localhost:3001/temperaments')
        .then(response => response.json())
        .then(temps => {
            dispatch({type: 'GET_TEMPERAMENTS', payload: temps})
        })
    }
}

export function addDog(body){
    return function(dispatch){
        return fetch('http://localhost:3001/dogs',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body), 
            Cache: 'default'
        })
        .then(dispatch({type: 'ADD_DOG'}))
    }
}
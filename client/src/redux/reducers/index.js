const initialState = {
    temperaments: [],
    dogs: [],
    dogdetails: {},
    dog: {}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'GET_DOGS':
       return {
        ...state,
        dogs: action.payload
       }
      case 'GET_DOG':
        return {
          ...state,
          dog: action.payload
        }
      case 'GET_DOG_DETAIL':
        return {
          ...state,
          dogdetails: action.payload
        }
      case 'GET_TEMPERAMENTS':
        return {
          ...state,
          temperaments: action.payload
        }
      case 'ADD_DOG':
        return {
         msg: 'Agregado correctamente'
        }
        default: return state  
    };
  };
  
  export default rootReducer;
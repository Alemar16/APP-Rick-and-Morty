import { ADD_FAVORITE, REMOVE_FAVORITE } from "./action.types.js";


const initialState = {
  myFavorites: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload] //se crea un estado nuevo, para no modificar el anterior
      }
    
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => character.id !== action.payload),

      }
    
    default:
      return { ...state }
  }

}

export default rootReducer;
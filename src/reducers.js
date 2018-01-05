import * as Actions from "./actions";
//will import GET_REQUEST ... getSucess as as keys in the Actions object ({})

const initialState = {};

export function initialStocksReducer(state = intialState, action) {
  switch (action.type) {
    case Actions.GET_SUCCESS:
      return {
        ...state,
        // films: action.data.films,
        // people: action.data.people,
        // planets: action.data.planets,
        // species: action.data.species,
        // starships: action.data.starships,
        // vehicles: action.data.vehicles,
        isFetching: false
      };
    case Actions.GET_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_FAILURE:
      console.log("Error:", action.error);
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

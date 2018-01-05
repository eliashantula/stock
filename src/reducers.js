import * as Actions from "./actions";
//will import GET_REQUEST ... getSucess as as keys in the Actions object ({})

const initialState = {
   stocks: [],
  accountValue,
};

export function initialStocksReducer(state = [], action) {
  switch (action.type) {
    case Actions.GET_SUCCESS:
      return {
        ...state,
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


export const stocksApp = combineReducers({initialStocksReducer});

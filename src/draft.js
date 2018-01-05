import * as Actions from "./actions";
//will import GET_REQUEST ... getSucess as as keys in the Actions object ({})

//for a bigger store
import { combineReducers } from "redux";

const initialState = {
  stocks: [],
  isFetching: false
};

export function initialStocksReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SUCCESS:
      return {
        ...state,
        stocks: action.data,
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

const initialTransactionState = {
  transactions: []
};

export function stockTransactions(state = initialTransactionState, action) {
switch (action.type) {
  case Actions.NEW_BUY:
    return {
      ...state,
      transactions: state.transactions.map().push(action.data)
    };

  case Actions.NEW_SELL:
    return {
      ...state,
      transactions: state.transactions.map().push(action.data)
    };
      default:
      return state;
  }
}

export const stocksApp = combineReducers({
  initialStocksReducer: initialStocksReducer
});

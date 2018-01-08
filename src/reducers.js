//-------------------------------
// Setup
//-------------------------------

import * as Actions from "./actions";
//will import GET_REQUEST ... getSucess as as keys in the Actions object ({})

//for a bigger store
import { combineReducers } from "redux";

//-------------------------------
// Stocks Reducer
//-------------------------------

const initialState = {
  stocks: [],
  isFetching: false,
 
  date: "2018-01-04"
};

export function initialStocksReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.DATE_SELECT:
      return {
        ...state,
        date: action.data
      };

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

//-------------------------------
// Transaction Reducer
//-------------------------------

const initialTransactionState = {
  transactions: [],
  stockscollection: [{ symbol: "AAPL", amount: 0 }],
  cash: 300000
};

export function stockTransactionsReducer(
  state = initialTransactionState,
  action
) {
  switch (action.type) {
    case Actions.NEW_TRANSACTION:
      console.log(action.data.transaction);
      console.log("____________");
      if (action.data.transaction === "buy") {
        console.log(state.cash)
        return {
          ...state,

          cash:state.cash - parseInt(action.data.amount) * parseInt(action.data.price),
          transactions: [
            ...state.transactions,
            {
              symbol: action.data.symbol,
              Type: action.data.transaction,
              Amount: action.data.amount,
              date: new Date(),
              Price: action.data.price
            }
          ],
          stockscollection: state.stockscollection.map(stock => {
            console.log(stock.symbol);
            if (stock.symbol === action.data.symbol) {
              console.log("here");
              return {
                ...stock,
                amount: stock.amount + parseInt(action.data.amount)
              };
            } else {
              return {
                symbol: action.data.symbol,
                amount: stock.amount + parseInt(action.data.amount)
              };
            }
          })
        };
      } else if (action.data.transaction === "sell") {
        return {
          ...state,
          stockscollection: state.stockscollection.map(stock => {
            if (stock.symbol === action.data.symbol) {
              return {
                ...stock,
                amount: stock.amount - parseInt(action.data.amount)
              };
            }
          }),
          cash: state.cash + parseInt(action.data.amount) * parseInt(action),
          transactions: [
            ...state.transactions,
            {
              Symbol: action.data.symbol,
              Type: action.data.transaction,
              Amount: action.data.amount,
              date: new Date(),
              Price: action.data.price
            }
          ]
        };
      }
    default:
      return state;
  }
}

export const stocksApp = combineReducers({
  initialStocksReducer: initialStocksReducer,
  stockTransactionsReducer: stockTransactionsReducer
});

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
  sorted: false,
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
  transactions: [
    {
      Amount: 4,
      Balance: 299660,
      Price: "170",
      Type: "buy",
      date: "2017-12-27",
      symbol: "AAPL"
    },
    {
      Amount: 3,
      Balance: 299405,
      Price: "173",
      Type: "buy",
      date: "2017-12-27",
      symbol: "MSFT"
    }
  ],
  stockscollection: [{ symbol: "AAPL", amount: 4 }],
  cash: 299405
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
        console.log(state.cash);
        let date = new Date().toLocaleDateString("en-US").split("/");
        if (date[0].length === 1) {
          date[0] = "0" + date[0];
        }
        if (date[1].length === 1) {
          date[1] = "0" + date[1];
        }
        let dateFixed = date[2] + "-" + date[0] + "-" + date[1];
        return {
          ...state,

          cash:
            state.cash -
            parseInt(action.data.amount) * parseInt(action.data.price),
          transactions: [
            ...state.transactions,
            {
              symbol: action.data.symbol,
              Type: action.data.transaction,
              Amount: action.data.amount,
              date: dateFixed,
              Price: action.data.price,
              Balance:
                state.cash -
                parseInt(action.data.amount) * parseInt(action.data.price)
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
        let date = new Date().toLocaleDateString("en-US").split("/");
        if (date[0].length === 1) {
          date[0] = "0" + date[0];
        }
        if (date[1].length === 1) {
          date[1] = "0" + date[1];
        }
        let dateFixed = date[2] + "-" + date[0] + "-" + date[1];
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
              date: dateFixed,
              Price: action.data.price,
              Balance:
                state.cash +
                parseInt(action.data.amount) * parseInt(action.data.price)
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

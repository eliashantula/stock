import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App"; //changed folder
import registerServiceWorker from "./registerServiceWorker";

//redux setup items
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";

//custom middleware
import logger from "redux-logger";
import thunk from "redux-thunk";

//importing our store
import {stocksApp} from "./reducers";

//importing an action
import {getInitialStocks} from "./actions";



const bankAccounts = [

{id: 1, balance: 10, transactions: [], display: []},
    {id: 2, balance: 1000, transactions: [], display: []},
    {id: 3, balance: 920022, transactions: [], display: []},

]


let store = createStore(stocksApp, applyMiddleware(thunk, logger));


let unsubscribe = store.subscribe(() => {});


console.table(store.getState());

unsubscribe();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//provided by create-react-app
registerServiceWorker();

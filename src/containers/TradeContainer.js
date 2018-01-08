import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
//our component and actions to give it
import Trade from "../components/Trade";


//for using forms
import serialize from "form-serialize";

import {getInitialStocks} from "../actions";
import {newTransaction} from "../actions";
//creating our own container
class TradeContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {stocks, isFetching, date, cash} = this.props;
    return (
      <Trade
        stocks={stocks}
        isFetching={isFetching}
        date={date}
        cash={cash}
      />
    );
  }
}



const mapStateToProps = state => {
  return {
    stocks: state.initialStocksReducer.stocks,
    isFetching: state.initialStocksReducer.isFetching,
    date: state.initialStocksReducer.date,
    cash: state.stockTransactionsReducer.cash
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      console.log("form data =>", data);
      dispatch(
      newTransaction(data)
       );
      form.reset();
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Trade);



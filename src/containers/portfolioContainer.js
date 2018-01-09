import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getPortfolioHistory} from "../actions";
//our component
import Portfolio from "../components/portfolio";



class PortfolioContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
     const {transactions, cash,date,stocks} = this.props;
    return (

      <Portfolio transactions = 
      {transactions}
      stocks={stocks}
      date={date}
      cash={cash}





       />
      )
  }
}

//getting the store state to container's props
const mapStateToProps = state => {
  return {
    transactions: state.stockTransactionsReducer.transactions,
    cash: state.stockTransactionsReducer.cash,
    date: state.initialStocksReducer.date,
    stocks: state.initialStocksReducer.stocks,
  };
};



//connecting to the store
export default connect(mapStateToProps, null)(PortfolioContainer);
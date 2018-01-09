import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//our component
import Transactions from "../components/Transactions";



class TransactionsContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
     const {transactions} = this.props;
    return (

      <Transactions transactions = {transactions} />
      )
  }
}

//getting the store state to container's props
const mapStateToProps = state => {
  return {
    transactions: state.stockTransactionsReducer.transactions
    // isFetching: state.initialStocksReducer.
  };
};



//connecting to the store
export default connect(mapStateToProps, null)(TransactionsContainer);
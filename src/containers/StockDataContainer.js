import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//our component
import StockData from "../components/StockData";

//creating our own container
class StockDataContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return <StockData />;
  }
}

//getting the store state to container's props
const mapStateToProps = state => {
  return {
    // stocks: state.initialStocksReducer
    // isFetching: state.initialStocksReducer.
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  // Create an object with the action creators
  // (or, import them as a named object)
  const actions = {getInitialStocks};

  // Returns exactly the same code as above
  return bindActionCreators(actions, dispatch);
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(StockDataContainer);

import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Trade from '../components/Trade'
//our component and actions to give it

import {getInitialStocks} from "../actions";


const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      dispatch(
        transferMoney(
          Number.parseInt(data.id),
          Number.parseInt(data.id1),
          Number.parseInt(data.amount)
        )
      );
      form.reset();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trade);
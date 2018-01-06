import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";

//our component and actions to give it
import Trade from "../components/Trade";
import {newTransaction} from "../actions";

//for using forms
import serialize from "form-serialize";

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

const TradeContainer = connect(null, mapDispatchToProps)(Trade);

export default TradeContainer;

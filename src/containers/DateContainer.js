import { connect } from "react-redux";
// Import serialize to get the serialized form data
import serialize from "form-serialize";

import {bindActionCreators} from "redux";
import { dateSelect } from "../actions";
// Import the presentational component
import Date from "../components/Date";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      console.log(form)
      const data = serialize(form, { hash: true });
      console.log(data);
      dispatch(
        dateSelect(
          data.date
        )
      );
      form.reset();
    }
  };
};

const DateContainer = connect(null, mapDispatchToProps)(Date);

export default DateContainer;
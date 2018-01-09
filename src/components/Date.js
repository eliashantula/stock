import React, { PropTypes } from "react";
import Button from "../elements/Button";
import Input from "../elements/Input";
import InputGroup from "../elements/InputGroup";

const Date = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h4>
      
      <span className="glyphicon glyphicon-search" aria-hidden="true" />
    </h4>
    <InputGroup name="date" labelText="">
      <Input name="date" placeholder="Enter a date from 2017/12/06-2018/01/04" />
    </InputGroup>
    <Button type="submit" color="primary">
      Submit
    </Button>
  </form>
);

export default Date;
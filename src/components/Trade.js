import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class Trade extends Component {
  constructor(props) {
    super();
  }
 componentDidMount(){}
  render() {
     
    const { onSubmit, cash, location} = this.props;

  
    let info = location.search.substring( location.search.indexOf('?') + 1 ).split("-");
    let symbol = info[0];
    let price = parseInt(info[1])
    let dates = info[2]+"-"+info[3]+"-"+info[4]


    console.log("trade props => ", this.props);
    console.log("onSubmit =>", onSubmit);
    console.log(info)
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Trade</div>
          <div className="card-block">
            {" "}
            <div className="row">
              <div className="col-xl-6">
                <form
                  onSubmit={onSubmit}
                  className="form-group"
                  style={{ marginTop: "5px", marginLeft: "30px" }}
                >
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      className="col-6-sm col-form-label"
                    >
                      Symbol
                    </label>
                    <div className="col-6-sm">
                      <input
                        className="form-control"
                        type="text"
                        name="symbol"
                        value={symbol}
                        id="example-text-input"
                        style={{ width: "300px", marginLeft: "18px" }}

                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      className="col-6-sm col-form-label"
                    >
                      Transaction Type:
                    </label>
                    <div className="col-6">
                     
                    <select name="transaction" style={{ width: "100px", marginLeft: "-100px" }}>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                    </select>
  

                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      class="col-6-sm col-form-label"
                    >
                      Quantity
                    </label>
                    <div className="col-6-sm">
                      <input
                        className="form-control"
                        type="text"
                        name="amount"
                        placeholder="Quantity"
                        id="example-text-input"
                        style={{ width: "300px", marginLeft: "10px" }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      className="col-6-sm col-form-label"
                    >
                      Date 
                    </label>
                    <div className="col-6-sm">
                      <input
                        className="form-control"
                        type="text"
                        name="date"
                        value={dates}
                        placeholder=""
                        id="example-text-input"
                        style={{ width: "300px", marginLeft: "40px" }}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      className="col-6-sm col-form-label"
                    >
                    Price: 
                    </label>
                    <div className="col-6-sm">
                      <input
                        className="form-control"
                        type="text"
                        name="price"
                        value={price}
                        id="example-text-input"
                        style={{ width: "300px", marginLeft: "33px" }}
                      />
                    </div>
                    <div className="col-6" style={{ textAlign: "left" }}>
                      {}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      className="col-6-sm col-form-label"
                    >
                      Cost
                    </label>
                    <div className="col-6-sm" style={{ textAlign: "left" }}>
                      {}
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Place Order"
                    style={{ marginLeft: "60px" }}
                  />
                </form>
              </div>
              <div className="account">
              <h4>Account Balance: ${cash}</h4>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}

export default Trade;

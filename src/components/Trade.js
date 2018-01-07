// reg component
import React, { Component } from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class Trade extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {}
  render() {
    const { onSubmit, cash} = this.props;
    console.log("onSubmit =>", onSubmit);
    console.log("trade props => ", this.props);

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
                        placeholder="Enter Symbol"
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
                      Buy/Sell
                    </label>
                    <div className="col-16">
                      <input
                        className="form-control"
                        type="text"
                        name="action"
                        placeholder="Buy or Sell"
                        id="example-text-input"
                        style={{ width: "300px", marginLeft: "13px" }}
                      />
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
                        placeholder="Date"
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
                      Price
                    </label>
                    <div className="col-10" style={{ textAlign: "left" }}>
                      {}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="example-text-input"
                      className="col-6-sm col-form-label"
                    >
                      Price
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
              <h4>Account Balance:{cash}</h4>
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

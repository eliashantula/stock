// reg component
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class List extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div class="card text-center">
          <div class="card-header">Trade</div>
          <div class="card-block">
            {" "}
            <div class="row">
              <div class="col-xl-6">
              <form className="form-group" style={{marginTop: "10px", marginLeft: "30px"}}>
                <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">
                    Symbol
                  </label>
                  <div class="col-10">
                    <input
                      class="form-control"
                      type="text"
                      name="symbol"
                      placeholder="AAPL"
                      id="example-text-input"
                      style={{width: "500px"}}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">
                    Buy/Sell
                  </label>
                  <div class="col-10">
                    <input
                      class="form-control"
                      type="text"
                      name="symbol"
                      placeholder="AAPL"
                      id="example-text-input"
                      style={{width: "500px"}}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">
                    Quantity
                  </label>
                  <div class="col-10">
                    <input
                      class="form-control"
                      type="text"
                      name="symbol"
                      placeholder="AAPL"
                      id="example-text-input"
                      style={{width: "500px"}}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">
                    Date
                  </label>
                  <div class="col-10">
                    <input
                      class="form-control"
                      type="text"
                      name="symbol"
                      placeholder="AAPL"
                      id="example-text-input"
                      style={{width: "500px"}}
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">
                    Price
                  </label>
                  <div class="col-10" style={{textAlign: "left"}}>
                    $100
                  </div>
                </div>
                <div class="form-group row">
                  <label for="example-text-input" class="col-2 col-form-label">
                    Price
                  </label>
                  <div class="col-10" style={{textAlign: "left"}}>
                    $100
                  </div>
                </div>
                <input
                  type="submit"
                  className="btn btn-success"
                  style={{marginLeft: "60px"}}
                />
              </form>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">Data pulled from Quandl API</div>
        </div>
      </div>
    );
  }
}

export default List;

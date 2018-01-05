// reg component
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class List extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const {getInitialStocks, stocks, isFetching} = this.props;

    getInitialStocks();
  }
  render() {
    const {getInitialStocks, stocks, isFetching} = this.props;

    console.log("stocks =>", stocks);
    return (
      <div>
        <div class="card text-center">
          <div class="card-header">Stocks</div>
          <div class="card-block">
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Price</th>
                  <th scope="col">1day</th>
                  <th scope="col">7day</th>
                  <th scope="col">30day</th>
                  <th scope="col">Trade?</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map(stock => {
                  return (
                    <tr>
                      <td>{stock.name}</td>
                      <td>${Math.floor(stock.dates[0].closing, 10)}</td>
                      <td>
                        {Math.trunc(
                          (stock.dates[0].closing - stock.dates[1].closing) * 10
                        ) / 10}
                      </td>
                      <td>
                        {Math.trunc(
                          (stock.dates[0].closing - stock.dates[6].closing) * 10
                        ) / 10}
                      </td>
                      <td>
                        {Math.trunc(
                          (stock.dates[0].closing -
                            stock.dates[stock.dates.length - 1].closing) *
                            10
                        ) / 10}
                      </td>
                      <td>
                        <a href="#"> trade </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div class="card-footer text-muted">Data pulled from Quandl API</div>
        </div>
      </div>
    );
  }
}

export default List;

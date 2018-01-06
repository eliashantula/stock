// reg component
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class List extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const {getInitialStocks, stocks, isFetching, date} = this.props;

    getInitialStocks();
  }
  render() {
    const {getInitialStocks, stocks, isFetching, date} = this.props;
    console.log("the date", date)
    console.log("stocks =>", stocks);
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Stocks</div>
          <div className="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Price</th>
                  <th scope="col">1day</th>
                  <th scope="col">7day</th>
                  <th scope="col">30day</th>
                  <th scope="col">Trade</th>
                </tr>
              </thead>
              <tbody>
                {
                  
                  stocks.map(stock => {
                  let numb;
                  let dates = this.props.date
                  for (var i = 0; i < stock.dates.length; i++){
                    if (stock.dates[i].date === dates){
                      numb=i
                      console.log("yes it does", dates)
                      console.log(numb, dates)
                    }
                    
                  }
                  return (
                    <tr>
                      <td>{stock.name}</td>
                      <td>${Math.floor(stock.dates[numb].closing, 10)}</td>
                      <td>
                        {Math.trunc(
                          (stock.dates[numb].closing - stock.dates[numb + 1].closing) * 10
                        ) / 10}
                      </td>
                      <td>
                        {Math.trunc(
                          (stock.dates[numb].closing - stock.dates[numb+ 6].closing) * 10
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
          <div className="card-footer text-muted">
            Data pulled from Quandl API
          </div>
        </div>
      </div>
    );
  }
}

export default List;

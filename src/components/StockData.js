// reg component
import React, { Component } from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocklist: this.props.stocks
    };
  }
getInitialState () {
  return {
    stocklist: this.props.stocks
  }
}
  componentDidMount() {
    const { getInitialStocks, stocks, isFetching, date } = this.props;
    getInitialStocks();
    

  }

  /*onSort(event, sortKey){

    const data = this.state.stocklist;
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({data})
  }*/

  sortedStocks(datas) {
  return [].concat(datas).sort((a, b) => a.name > b.name)

  }

  render() {
    
    const { getInitialStocks, stocks, isFetching, date } = this.props;
    console.log("the date", date);
    console.log("stocks =>", stocks);

    //const sorted = [].concat(stocks).sort((a, b) => a.name > b.name)
    const sortedOut = this.sortedStocks(stocks) 

   
      
 


    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Stocks</div>
          <div className="test" />
          <div className="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Price</th>
                  <th scope="col">1day</th>
                  <th scope="col">7day</th>
                  <th scope="col">30day</th>
                  <th scope="col">Trade</th>
                </tr>
              </thead>
              <tbody>

                {sortedOut.map(stock => {
                  let numb, current, oneDay, sevenDay, thirtyDay;
                  let dates = this.props.date;
                  console.log(dates);
                  for (var i = 0; i < stock.dates.length; i++) {
                    if (stock.dates[i].date === dates) {
                      numb = i;
                      console.log("yes it does", dates);
                      
                    }
                  }
                  if (numb === undefined) {
                    current = "Data unavailable for date range";
                  } else {
                    current = Math.floor(stock.dates[numb].closing, 10);
                  }
                  if (stock.dates[numb + 1] === undefined) {
                    oneDay = "Data unavailable for date range";
                  } else {
                    oneDay =
                      Math.trunc(
                        (stock.dates[numb].closing -
                          stock.dates[numb + 1].closing) *
                          10
                      ) / 10;
                  }
                  if (stock.dates[numb + 6] === undefined) {
                    sevenDay = "Data unavailable for date range";
                  } else {
                    sevenDay =
                      Math.trunc(
                        (stock.dates[numb].closing -
                          stock.dates[numb + 6].closing) *
                          10
                      ) / 10;
                  }
                  if (
                    stock.dates.length - 1 - numb < 20 ||
                    numb === undefined
                  ) {
                    thirtyDay = "Data unavailable for date range";
                  } else {
                    thirtyDay =
                      Math.trunc(
                        (stock.dates[numb].closing -
                          stock.dates[stock.dates.length - 1].closing) *
                          10
                      ) / 10;
                  }

                  return (
                    <tr>
                      <td>{date}</td>
                      <td>{stock.name}</td>
                      <td>{current}</td>
                      <td>{oneDay}</td>

                      <td>{sevenDay}</td>
                      <td>{thirtyDay}</td>
                      <td>
                        <NavLink
                          exact
                          to={`/trade/?${stock.name}-${current}-${date}`}
                          activeClassName="active"
                        >
                          Trade
                        </NavLink>{" "}
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

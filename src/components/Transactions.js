
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";



class Transactions extends Component {
  constructor(props) {
    super();
  }
 sortedStocks(datas) {
  return [].concat(datas).sort((a, b) => a.symbol > b.symbol)

  }
  render() {
    const {transactions} = this.props
    console.log("here are transactions=>")
    console.log(transactions)
    const transactionSort = this.sortedStocks(transactions) 
  

  

    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Transactions</div>
          <div class="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
              {transactionSort.map(transaction => {
              return (
                <tr>
                  <td>{transaction.date}</td>
                  <td>{transaction.symbol}</td>

                  <td>{transaction.Type}</td>
                  <td>{transaction.Amount}</td>
                  <td>{transaction.Price}</td>
                </tr>


                )


              })}
                             </tbody>
            </table>
          </div>
          <div className="card-footer text-muted"></div>
        </div>
      </div>
    );
  }
}


export default Transactions;

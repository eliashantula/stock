
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";



class Transactions extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {transactions} = this.props

    return (
      <div>
        <div class="card text-center">
          <div class="card-header">Transactions</div>
          <div class="card-block">
            <table class="table table-striped table-dark">
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
              {transactions.map(transaction => {
              return (
                <tr>
                  <td>{transaction.date}</td>
                  <td>{transaction.symbol}</td>

                  <td>{transaction.type}</td>
                  <td>{transaction.quantity}</td>
                  <td>{transaction.price}</td>
                </tr>


                )


              })}
                             </tbody>
            </table>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}


export default Transactions;

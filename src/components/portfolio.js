
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";



class Portfolio extends Component {
  constructor(props) {
    super();
  }
 sortedStocks(datas) {
  return [].concat(datas).sort((a, b) => a.symbol > b.symbol)

  }

/*filteredStocks(date,transactions){
let filtered = []
for (var i =0; i < transactions.length; i++){

if (transactions[i].date <= date){
  filtered.push(transactions[i])
}

}
return filtered
}*/






  render() {
    const {transactions,cash,date,stocks} = this.props
    console.log("here are transactions=>")
    //const filteredStock = this.filteredStocks(transactions)
    //console.log(filteredStock)
    const transactionSort = this.sortedStocks(transactions)
    const value = transactionSort[transactionSort.length-1].Balance



  

  

    return (
      <div>
       <div className="card text-center">
          <div className="card-header">Portfolio</div>
          <div class="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Cost Basis</th>
                  <th scope="col">Current Value</th>
                  <th scope="col">Profit Loss</th>
                  <th scope="col">1Day</th>
                  <th scope="col">7Day</th>
                  <th scope="col">30Day</th>
                </tr>
              </thead>
              <tbody>
              {transactionSort.map(transaction => {

              return (
                <tr>
                  <td>{value}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>


                )


              })}
                             </tbody>
            </table>
          </div>
          </div>
        <div className="card text-center">
          <div className="card-header">Portfolio</div>
          <div class="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Current Cash Balance</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
              <tr><td>{value}</td></tr>
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


export default Portfolio;

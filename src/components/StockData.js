// reg component
import React, {Component} from "react";

class List extends Component {
  constructor(props) {
    super();
  }

  render() {
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
                  <th scope="col">1d</th>
                  <th scope="col">7d</th>
                  <th scope="col">30d</th>
                  <th scope="col">Trade?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer text-muted">2 days ago</div>
        </div>
      </div>
    );
  }
}

export default List;

// reg component
import React, {Component} from "react";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

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
                  {/*                  <th scope="row">1</th>
*/}
                  <td>Mark</td>
                  <td>Mark</td>

                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
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

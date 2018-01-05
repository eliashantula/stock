import React, {Component} from "react";
import logo from "../logo.svg";
import "./App.css";

//custom containers
import StockDataContainer from "../containers/StockDataContainer";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-light bg-faded"
          style={{marginBottom: "40px"}}
        >
          <h1>
            <a class="navbar-brand" href="#">
              FidelGuard Stock Portfolio Simulator
            </a>{" "}
          </h1>
        </nav>
        <div className="App container-fluid">
          {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}

          <div class="row">
            <div class="col-md-4">
              <StockDataContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

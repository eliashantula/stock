import React, {Component} from "react";
import logo from "../logo.svg";
import "./App.css";

//custom containers
import StockDataContainer from "../containers/StockDataContainer";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer"
//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            className="navbar navbar-light bg-faded"
            style={{marginBottom: "40px"}}
          >
            <h1>
              <a className="navbar-brand" href="#">
                FidelGuard Stock Portfolio Simulator
              </a>{" "}
            </h1>
          </nav>
          <div className="App container-fluid">
            <div className="row">
              <div className="col-xl-4">
                <StockDataContainer />
              </div>
              <div className="col-xl-8">
                <Switch>
                  <Route exact path="/trade" component={TradeContainer} />
                  <Route exact path="/portfolio" component={TradeContainer} />
                  <Route exact path="/" component={TradeContainer} />
                  <Route exact path="/transactions" component={TransactionsContainer} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//old app components
/*<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>*/

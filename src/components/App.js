import React, {Component} from "react";
import logo from "../logo.svg";
import "./App.css";

//custom containers
import StockDataContainer from "../containers/StockDataContainer";
import Trade from "../components/Trade";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
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
          <div class="row">
            <div class="col-xl-4">
              <StockDataContainer />
            </div>
            <div class="col-xl-8">
            <Switch>

              <Route exact path="/trade" component={Trade} />
              <Route exact path="/portfolio" component={Trade} />
              <Route exact path="/" component={Trade} />
            </Switch>
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

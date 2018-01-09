import React, {Component} from "react";
import logo from "../logo.svg";
import "./App.css";
import DateContainer from '../containers/DateContainer'
//custom containers
import StockDataContainer from "../containers/StockDataContainer";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer"
import PortfolioContainer from '../containers/portfolioContainer'
//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Background from '../public/images/dollars.jpg';


const home = '/'
class App extends Component {
  render() {
    return (
      <Router>
        <div style={{backgroundImage: "url(" + Background + ")", height: "900px"}}>
          <nav
            className="navbar navbar-light bg-faded"
            style={{marginBottom: "40px"}}>
            <h3>
              <NavLink exact to="/" activeClassName="active">
        FidelGuard Stock Portfolio Simulator
      </NavLink>{' '}
                
            </h3>
          </nav>
          <div className="App container-fluid">
           <div className="date">
                <DateContainer />
              </div>
               <div>
      <NavLink style={{backgroundColor: "black"}} exact to="/trade" activeClassName="active">
        Trade{'   '}
      </NavLink>
      <NavLink style={{backgroundColor: "black"}} exact to="/portfolio" activeStyle={{color: 'red'}}>
        {''}Portfolio{'  '} 
      </NavLink>
       <NavLink style={{backgroundColor: "black"}} exact to="/transactions" activeStyle={{color: 'red'}}>
        Transactions{'  '} 
      </NavLink>
      </div>
            <div className="row">
              <div className="col-xl-6">
                <StockDataContainer />
              </div>
              <div className="col-xl-6">
                <Switch>
                  <Route exact path="/trade/:page_number?" component={TradeContainer} />
                  <Route exact path="/portfolio" component={PortfolioContainer} />
                  <Route exact path="/" render = {()=><h1 style={{marginTop: "60px"}}>Welcome</h1>} />
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

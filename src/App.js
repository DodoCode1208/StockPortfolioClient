import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navigation from './components/Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ViewStocks from './components/ViewStocks';
import AddPortfolioStock from './components/AddPortfolioStock';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
          <h3 className="m-3 d-flex justify-content-center">
            Stocks Portfolio
          </h3>

          <Navigation/>

          <Switch>
            <Route path='/' component={ViewStocks} exact/>
            <Route path='/ViewStocks' component={ViewStocks}/>
            <Route path='/AddPortfolioStock' component={AddPortfolioStock}/>
          </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;

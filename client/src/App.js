import React from 'react';
import Login from './component/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Setting from './component/Setting';
import Order from './component/Order';
import Product from './component/Product';
import AppNavbar from './component/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/setting" exact component={Setting} />
          <Route path="/order" exact component={Order} />
          <Route path="/product" exact component={Product} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

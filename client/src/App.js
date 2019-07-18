import React from 'react';
import Login from './component/Login';
import { BrowserRouter, Route } from "react-router-dom";
import Setting from './component/Setting';
import Order from './component/Order';
import Product from './component/Product';
import AppNavbar from './component/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticatedComponent from './component/AuthenticatedComponent';

function App(){
    return (
        <BrowserRouter>
        <div className="App">
          <AppNavbar/>
            {/* <AuthenticatedComponent> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/setting" component={Setting} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/product" component={Product} />
            {/* </AuthenticatedComponent> */}
          </div>
        </BrowserRouter>
    );
  
}

export default App;

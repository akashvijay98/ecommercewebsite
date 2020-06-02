import React from "react";

import Page from "./components/Cart/Page"


import {  Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Modal from "./components/Modal";


import check from "./components/CheckoutForm/check"


import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import { AuthProvider } from "./components/Authentication/Auth";
import PrivateRoute from "./components/Authentication/PrivateRoute";




import Default from "./components/Default";



      const App = () => {
        return (
          <AuthProvider>
            <Router>
              <div>
              <Navbar></Navbar>

                <PrivateRoute exact path="/" component={ProductList} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                
                <Route path="/details" component={Details}/>
                <Route path="/check" component={check}/>
               <Route path="/cart" component={Cart}/>
               <Route path="/page" component={Page}/>
                
               <Modal/>
              </div>
            </Router>
          </AuthProvider>
        );
   
    
}

export default App;

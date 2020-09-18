import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/Signup/SignUp";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import PromoBanner from "./Components/PromoBanner/PromoBanner";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/promoBanner" component={PromoBanner} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer";
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path="/product" component={Product} exact />

          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <Errors />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

function Errors() {
  return <h2>Error 404</h2>;
}

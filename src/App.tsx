import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EmployeForm from "./component/form/EmployeForm";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ContactUs from "./component/header/Contact-us";
import AboutUs from "./component/header/About";
import Header from "./component/header/Header";
import NotFound from "./component/header/notFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={EmployeForm} />

          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
      {/* <EmployeForm/> */}
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "../../Resources/Site.scss";
import About from "../About/About";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact} />   
        <Redirect from="*" to="/" component={Home} />     
        </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
};

export default App;

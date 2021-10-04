import React from "react";
import "./app.css";
import Home from "./Home";
import Header from "./Header";
import LPproject from "./LPproject";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LPvideo from "./LPvideo";
import LPpricing from "./LPpricing";
import LPtestimonial from "./LPtestimonial"
import LPcontact from "./LPcontact";
import { Provider } from "react-redux";
import { store } from "./store";
import Projects from "./Projects"
import SingleProject from "./SingleProject";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <div className="app">
     <Provider store={store}>
      <Router>
        <Header /> 
        <Switch>
          <Route exact path="/">
            <Home />
            <LPproject />
            <LPvideo />
            <LPpricing />
            <LPtestimonial />
            <LPcontact />
          </Route>

          <Route exact path="/projects">
            <Projects />
          </Route>

          <Route exact path="/projects/:projectsId"  component={SingleProject}/>

          <Route path="/services">
            <Services />
          </Route> 

          <Route path="/contact">
            <Contact />
          </Route> 
        </Switch>
      </Router>
     </Provider>
    </div>
  );
}

export default App;

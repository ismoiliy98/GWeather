import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import DayForecast from "./DayForecast/DayForecast";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:day" component={DayForecast} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

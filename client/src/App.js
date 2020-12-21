import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurants from "./pages/restaurants";
import Detail from "./pages/Detail";
import Randomizer from "./pages/Randomizer";
import Landing from "./pages/Landing";
import './pages/RandomStyle.css'
import ViewAll from "./pages/ViewAll";

import Navagation from "./components/Nav";

function App() {
  return (
    <div className="bg">
    <Router>
      <div>
        <Navagation />
        <Switch>
        <Route exact path={"/"}>
            <Landing />
          </Route>
          <Route exact path={["/", "/addRestaurant"]}>
            <Restaurants />
          </Route>
          <Route exact path="/restaurants/:id">
            <Detail />
          </Route>
          <Route exact path={["/","/randomizer"]}>
            <Randomizer />
          </Route>
          <Route exact path={"/viewall"}>
            <ViewAll />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

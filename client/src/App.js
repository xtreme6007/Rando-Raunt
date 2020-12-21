import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Restaurants from "./pages/restaurants";
import Detail from "./pages/Detail";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/restaurants"]}>
            <Restaurants />
          </Route>
          <Route exact path="/restaurants/:id">
            <Detail />
          </Route>
         
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

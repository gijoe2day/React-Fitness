import React from "react";
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/exercise" exact component={Exercises} />
        <Route path="/exercise/new" exact component={ExerciseNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fetch from "./component/fetch";
import Todo from "./component/todo";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/fetch">Fetch</Link>
        <Link to="/todo">Todo</Link>
        <Switch>
          {/* <FormUI/> */}
          <Route exact path="/fetch" component={Fetch} />
          <Route path="/fetch/:id" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

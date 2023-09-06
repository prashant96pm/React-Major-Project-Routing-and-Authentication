import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar"; // Import the Navbar component
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"; // Import your pages here
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Include the Navbar component */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          {/* Add more routes as needed */}
        </Switch>
      </Router>
    </div>
  );
}

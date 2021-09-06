import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        {!user && <Route path="/register" component={Register} />}{" "}
        <Route path="/write" component={Write} />
        <Route path="/login" component={Login} />
        <Route path="/settings" component={Settings} />
        <Route path="/post/:postId" component={Single} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

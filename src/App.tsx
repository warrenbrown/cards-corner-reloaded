import React from "react";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Write from "./pages/Write";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      <Settings />
    </div>
  );
}

export default App;

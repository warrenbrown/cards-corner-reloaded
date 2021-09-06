import React from "react";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Single from "./pages/Single";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      <Single />
    </div>
  );
}

export default App;

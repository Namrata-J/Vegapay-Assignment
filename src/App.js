import React from "react";
import { Toaster } from "react-hot-toast";
import { RoutesComp } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <RoutesComp />
      <Toaster />
    </div>
  );
}

export default App;

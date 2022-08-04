import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import UserPage from "./page/UserPage";

function App() {
  const [userName, setUserName] = useState("johnpapa");
  return (
    <>
      <Navbar userName={userName} setUserName={setUserName} />
      <UserPage userName={userName} setUserName={setUserName} />
    </>
  );
}

export default App;

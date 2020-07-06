import React from "react";
import Navbar from "./Compoenets/Navbar";
import Upload from "./Compoenets/upload";

import "./styles.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Upload />
      </div>
    </div>
  );
}

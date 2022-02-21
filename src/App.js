import "./App.css";
import React from "react";
import ZodiacSigns from "./ZodiacSigns";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Daily Astrology</h1>
          <ZodiacSigns />
        </header>
      </div>
    </div>
  );
}

import { BrowserRouter, Routes, Route, Link } from "react-router";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="Header">
        <Header />
      </header>
      <section className="FilterBar">
        <FilterBar />
      </section>
    </div>
  );
}

export default App;

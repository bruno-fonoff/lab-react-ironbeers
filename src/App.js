import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Beers } from "./components/Pages/Beers";
import { NewBeer } from "./components/Pages/NewBeer";
import { RandomBeers } from "./components/Pages/RandomBeers";
import { Home } from "./components/Pages/Home";
import { SingleBeer } from "./components/Pages/SingleBeer";
// import axios from "axios";

function App() {
  return (
    <>
      <div className="App"></div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/beers" element={<Beers />}></Route>
          <Route path="/random-beer" element={<RandomBeers />}></Route>
          <Route path="/new-beer" element={<NewBeer />}></Route>
          <Route path="/beers/:beerId" element={<SingleBeer />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

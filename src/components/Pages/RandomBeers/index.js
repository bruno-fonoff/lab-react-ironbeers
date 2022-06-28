import { Link } from "react-router-dom";
import axios from "axios";
// import beers from "../../../assets/beers.png";
import home from "../../../assets/home.png";
import { useState, useEffect } from "react";
import "./style.css";

export function RandomBeers() {
  const [stateBeer, setStateBeer] = useState([]);

  useEffect(() => {
    async function allBeers() {
      const beers = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setStateBeer(beers.data);
      console.log(beers.data);
      console.log(stateBeer);
    }
    allBeers();
  }, []);
  console.log(stateBeer.name);

  return (
    <>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
      <div id="singleBeer">
        <div>
          <img id="singleImage" src={stateBeer.image_url} alt="foto"></img>
        </div>
        <div>
          <div id="tituloAtt">
            <p id="singleName">{stateBeer.name}</p>
            <p id="att">{stateBeer.attenuation_level}</p>
          </div>
          <div id="tagBrewed">
            <h3 className="grayText">{stateBeer.tagline}</h3>
            <p id="firstBrewed">{stateBeer.first_brewed}</p>
          </div>
          <p id="description">{stateBeer.description}</p>
          <p id="created">{stateBeer.contributed_by}</p>
        </div>
      </div>
    </>
  );
}

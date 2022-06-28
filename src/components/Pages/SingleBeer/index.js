import home from "../../../assets/home.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";

export function SingleBeer() {
  const { beerId } = useParams();

  const [stateBeer, setStateBeer] = useState([]);

  useEffect(() => {
    async function allBeers() {
      const beers = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setStateBeer(beers.data);
    }
    allBeers();
  }, []);

  return (
    <>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
      <div>
        {stateBeer
          .filter((currentBeer) => {
            return currentBeer.name === beerId;
          })
          .map((currentBeer) => {
            return (
              <div id="singleBeer">
                <div>
                  <img
                    id="singleImage"
                    src={currentBeer.image_url}
                    alt="foto"
                  ></img>
                </div>
                <div>
                  <div id="tituloAtt">
                    <p id="singleName">{currentBeer.name}</p>
                    <p id="att">{currentBeer.attenuation_level}</p>
                  </div>
                  <div id="tagBrewed">
                    <h3 className="grayText">{currentBeer.tagline}</h3>
                    <p id="firstBrewed">{currentBeer.first_brewed}</p>
                  </div>
                  <p id="description">{currentBeer.description}</p>
                  <p id="created">{currentBeer.contributed_by}</p>
                </div>
              </div>
            );
          })}
      </div>
      <Link className="nosub" to="/beers">
        <button id="buttonBack" className="btn btn-info">
          Back
        </button>
      </Link>
    </>
  );
}

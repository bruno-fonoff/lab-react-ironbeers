import { Link } from "react-router-dom";
import axios from "axios";
// import beers from "../../../assets/beers.png";
import home from "../../../assets/home.png";
import { useState, useEffect } from "react";
import "./style.css";

export function Beers() {
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

      {stateBeer.map((currentBeer) => {
        return (
          <>
            <div id="allBeers">
              <div>
                <Link to={currentBeer._id}>
                  <img
                    id="imagebeer"
                    src={currentBeer.image_url}
                    alt="foto"
                  ></img>
                </Link>
              </div>
              <div>
                <h2 id="nameBeer">{currentBeer.name}</h2>
                <h3 className="grayText">{currentBeer.tagline}</h3>
                <p id="textCreated">
                  <b>Created by: </b>
                  {currentBeer.contributed_by}
                </p>
              </div>
            </div>
            <hr></hr>
          </>
        );
      })}

      {/* <Link to="/">
        <button>Back to Home</button>
      </Link> */}
    </>
  );
}

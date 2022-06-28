import { Link } from "react-router-dom";
import beers from "../../../assets/beers.png";
import newbeer from "../../../assets/new-beer.png";
import randombeers from "../../../assets/random-beer.png";
import "./style.css";

export function Home() {
  return (
    <>
      <div>
        <Link className="link" to="/beers">
          <img src={beers} alt="allbeers" />
          <h1 className="titulo">All Beers</h1>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </Link>
      </div>

      <div>
        <Link className="link" to="/random-beer">
          <img src={randombeers} alt="randombeers" />
          <h1 className="titulo">Random Beers</h1>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </Link>
      </div>

      <div>
        <Link className="link" to="/new-beer">
          <img src={newbeer} alt="newbeers" />
          <h1 className="titulo">New Beer</h1>
          <p className="texto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam
            dictum arcu ut dignissim varius.
          </p>
        </Link>
      </div>
    </>
  );
}

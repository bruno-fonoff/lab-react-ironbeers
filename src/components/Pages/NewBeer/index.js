import { Link } from "react-router-dom";
// import newbeer from "../../../assets/new-beer.png";
import home from "../../../assets/home.png";

export function NewBeer() {
  return (
    <>
      <Link to="/">
        <img src={home} alt="home" />
      </Link>

      {/* <Link to="/">
        <button>Back to Home</button>
      </Link> */}
    </>
  );
}

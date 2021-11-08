import useState from "react";
import naan from "../assets/naan.png";
import "./naan-styles.css";
const Naan = ({ setClicks, randomize, clicks }) => {
  const naanFunctions = () => {
    setClicks(clicks + 1);
    randomize();
  };

  return (
    <div className="container">
      <img
        className="container__image"
        src={naan}
        onClick={() => naanFunctions()}
      ></img>
    </div>
  );
};

export default Naan;

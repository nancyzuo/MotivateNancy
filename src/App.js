import logo from "./logo.svg";
import "./App.css";
import Naan from "./components/naan";
import { useState, useEffect } from "react";
import "./components/naan-styles.css";

const App = () => {
  const [clicks, setClicks] = useState(null);

  useEffect(() => {
    setClicks(0);
  }, []);

  const randomColors = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const randomize = () => {
    document.body.style.background = randomColors();
  };

  return (
    <div className="App">
      <Naan setClicks={setClicks} randomize={randomize} clicks={clicks} />
      <div className="container__text">
        <h1>
          hello i'm <br />
          naaan cy 👋
        </h1>
        <p>
          <strong>click the naan</strong> to motivate nancy to create a new
          portfolio.
        </p>

        <p>
          meanwhile check out her current{" "}
          <a href="https://nancyzuo.me" target="_blank">
            portfolio
          </a>
          ,{" "}
          <a href="https://nancyzuo.substack.com/welcome" target="_blank">
            newsletter
          </a>
          , and{" "}
          <a href="https://twitter.com/zuo_nancy" target="_blank">
            twitter
          </a>
          .
        </p>
      </div>
      <p className="input">
        {clicks}
        <br />
        Clicks
      </p>
    </div>
  );
};

export default App;

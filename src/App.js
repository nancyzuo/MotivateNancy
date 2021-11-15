import logo from "./logo.svg";
import "./App.css";
import Naan from "./components/naan";
import { useState, useEffect } from "react";
import "./components/naan-styles.css";
import { firestore } from "./firebase-config"

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

  // App.js
  state = {
      numClicks: 0
    }

  const { numClicks } = this.state

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  // App.js
addBook = event => {
	event.preventDefault()

	firestore.collection("clicks").add({
		numClicks: this.state.numClicks,
	})

	this.setState({ numClicks: 0 })
}
  
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

      <form onSubmit={this.addBook}>
                    <input
                        type='text'
                        placeholder='clicks'
                        name='title'
                        onChange={this.updateInput}
                        value={numClicks}
          />
                    <button type='submit'>Submit</button>
                </form>


      <p className="input">
        {clicks}
        <br />
        Clicks
      </p>
    </div>
  );

};


export default App;

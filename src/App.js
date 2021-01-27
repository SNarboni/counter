import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  decrementCount = () => {
    let result = this.state.count;
    if (result === 0) {
      return;
    } else {
      result--;
      this.setState({ count: result });
    }
  };
  incrementCount = () => {
    let result = this.state.count;
    result++;
    this.setState({ count: result });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Counter</h1>
          <Counter
            resultatDuCounter={this.state.count}
            retire={this.decrementCount}
            ajoute={this.incrementCount}
          />
          <Counter
            resultatDuCounter={this.state.count}
            retire={this.decrementCount}
            ajoute={this.incrementCount}
          />
        </header>
      </div>
    );
  }
}

export default App;

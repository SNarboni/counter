import React from "react";
import "./App.css";

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
          <h2>Counter</h2>
          <h2>{this.state.count}</h2>
          <div>
            <button className="btn btn-primary" onClick={this.decrementCount}>
              -
            </button>
            <button className="btn btn-secondary" onClick={this.incrementCount}>
              +
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

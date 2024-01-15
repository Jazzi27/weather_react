import React, { Component } from "react";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="App">
            <Weather city="lisbon" />
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import List from "./components/List";
import Global from "./styles/global";

class App extends Component {
  render() {
    return (
      <section>
        <Global/>
        <List/>
      </section>
    );
  }
}

export default App;

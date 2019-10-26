import React, { Component } from 'react';
import './App.css';
import getChatLog from "./service";

class App extends Component {

  componentWillMount() {
    getChatLog().then((messages) => {
        console.log(messages);
    });
}
  render() {
    return (
      <div className="AppContainer">
        <h1>
          Hello Robin!
      </h1>
      </div>
    );
  }
}

export default App;

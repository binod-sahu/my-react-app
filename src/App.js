import React, { Component } from 'react';
import './App.css';
import getChatLog from "./service";
import { ChatMessageList } from "./components/ChatMessageList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { list: [] }
  }

  componentWillMount() {
    getChatLog().then((messages) => {
      this.setState({ 'list': messages })
    });
  }
  render() {
    const { list } = this.state;
    return (
      <div className="AppContainer">
        <h1>SKY</h1>
        <ChatMessageList list={list} />
      </div>
    );
  }
}

export default App;

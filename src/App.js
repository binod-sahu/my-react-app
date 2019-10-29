import React, { Component } from 'react';
import './App.css';
// import getChatLog from "./services/service";
import { ChatMessageList } from "./components/chatMessageList";
import { Header } from "./components/header";
import LoadMembers from "./actions/LoadMembers";
import LoadMessages from "./actions/LoadMessages";
import { connect } from "react-redux";

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { list: [] }
  // }

  componentWillMount() {
    this.props.loadMembers();
    this.props.loadMessages();

    // getChatLog().then((messages) => {
    //   this.setState({ 'list': messages })
    // });
  }

  render() {
    // const { list } = this.state;
    console.log(this.props);
    return (
      <div className="AppContainer">
        <Header />
        <ChatMessageList 
        messages={this.props.messages}
        members={this.props.members}
         />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members.members,
    messages: state.messages.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMembers: () => LoadMembers()(dispatch),
    loadMessages: () => LoadMessages()(dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

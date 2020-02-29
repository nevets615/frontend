import React, { Component } from "react";
import "./chat.css";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA
    };
  }

  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default Chat;

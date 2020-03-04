import React, { Component } from "react";
import "./chat.css";

class Messages extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
  return (
    <ul className="message-list">
        { this.props.messages.map(message => {
            return (
              <li key={message.id}>
                <div>{message.senderId}</div>
                <div>{message.parts[0].payload.content}</div>
              </li>
            );
          })}
    </ul>
  );
}
};

export default Messages;

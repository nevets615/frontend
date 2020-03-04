import React, { Component } from "react";
import "./chat.css";
import MessageForm from "./messageForm";
import Messages from "./messages";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

const instanceLocator = "v1:us1:77ce90b4-645a-4a9e-be1f-6624fe216506";

const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/77ce90b4-645a-4a9e-be1f-6624fe216506/token";

const userId = "steven999";

const roomId = "800d045b-1b73-434b-adb3-113016ac1065";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this)
  }
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      this.setState({ currentUser: currentUser });
      return currentUser.subscribeToRoomMultipart({
        roomId: roomId,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }
  
  sendMessage(text) {
    console.log(this.state);
    this.state.currentUser.sendMessage({
      text: text,
      roomId: roomId
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <Messages messages={this.state.messages} />
        <MessageForm sendMessage={this.sendMessage} />
      </div>
    );
  }
}
export default Chat;

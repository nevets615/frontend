import React, { Component } from "react";
import "./chat.css";
import MessageForm from "./messageForm"
import Messages from "./messages"
const instanceLocator = "v1:us1:2f8e0c2d-38f6-4f78-9a1c-e339238520a8";

const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2f8e0c2d-38f6-4f78-9a1c-e339238520a8/token";

const username = "surj615";

const roomId = 3494839852;

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ""
    };
}
componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
   })
}
   sendMessage(text) {
    this.currentUser.sendMessage({
      text: text,
      roomId: roomId
    })
  }

  render() {
    return (
      <div className="app">
        <Messages messages={this.state.messages} />
        <MessageForm />
      </div>
    );
  }

}
export default Chat;

import React, { Component } from "react";
import "./chat.css";

class ChatDisplay extends Component {
  state = {
    message: ""
  };

  handleMessageInput = e => {
    e.persist();
    const feed = document.getElementById("feed");

    if (e.target.value) {
      this.setState({ message: e.target.value }, () => {
        feed.scrollTop = feed.scrollHeight;
      });
    }
    if (e.key && e.key === "Enter") {
      this.props
        .onSpeak(this.state.message)
        .then(() => {
          this.setState({ message: "" });
          feed.scrollTop = feed.scrollHeight;
        })
        .catch(() => this.setState({ message: "" }));
    }
  };

  render() {
    const { messageFeed, onSpeak } = this.props;
    const { message } = his.state;

    return (
      <div>
        <div className="Text">
          value={message}
          onChange={this.handleMessageInput}
          onKeyUp={this.handleMessageInput}
        </div>
        <button type="submit" onClick={onSpeak}></button>
      </div>
    );
  }
}

export default ChatDisplay;

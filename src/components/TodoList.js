import React from "react";

export default class TodoList extends React.Component {
  render() {
    return (
      <div className="ui list">
        <p className="item">Go for a walk</p>
        <p className="item">Go for shopping</p>
        <p className="item">Other todo item!</p>
      </div>
    );
  }
}

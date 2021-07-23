import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class TodoList extends React.Component {
  // Access to data context
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme, lightTheme, darkTheme } = this.context;
    // Decide which theme is active
    const { text, background } = isDarkTheme ? darkTheme : lightTheme;
    return (
      <div
        style={{
          background,
          color: text,
          height: "140px",
          textAlign: "center",
        }}
      >
        <p className="item">Go for a walk</p>
        <p className="item">Go for shopping</p>
        <p className="item">Other todo item!</p>
      </div>
    );
  }
}

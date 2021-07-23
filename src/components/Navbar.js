import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends React.Component {
  // Access to data context
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme, lightTheme, darkTheme } = this.context;
    // Decide which theme is active
    const { text, background } = isDarkTheme ? darkTheme : lightTheme;
    return (
      <nav style={{ background, color: text, height: "120px" }}>
        <h2 style={{ textAlign: "center" }}>TODO List</h2>
        <div className="ui three buttons">
          <button className="ui button">Overview</button>
          <button className="ui button">Contact</button>
          <button className="ui button">Support</button>
        </div>
      </nav>
    );
  }
}

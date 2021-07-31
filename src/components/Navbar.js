import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default class Navbar extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const {
                  isDarkTheme,
                  lightTheme,
                  darkTheme,
                  handleChangeTheme,
                } = themeContext;
                const { isLoggedIn, changeAuthStatus } = authContext;
                // Decide which theme is active
                const { text, background, themeIcon } = isDarkTheme
                  ? darkTheme
                  : lightTheme;
                return (
                  <nav style={{ background, color: text, height: "120px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      <h2 style={{ margin: "0 10px 0" }}>TODO List</h2>
                      <p
                        onClick={changeAuthStatus}
                        style={{ textAlign: "center", margin: "0 10px 0" }}
                      >
                        {isLoggedIn ? "LoggedIn" : "LoggedOut"}
                      </p>
                      <button
                        className="ui icon button"
                        onClick={handleChangeTheme}
                      >
                        <i className={`${themeIcon} icon`}></i>
                      </button>
                    </div>
                    <div className="ui three buttons">
                      <button className="ui button">Overview</button>
                      <button className="ui button">Contact</button>
                      <button className="ui button">Support</button>
                    </div>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

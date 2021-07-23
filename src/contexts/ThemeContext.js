import React from "react";

export const ThemeContext = React.createContext();

export default class ThemeContextProvider extends React.Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      text: "#222",
      background: "#d8ddf1",
      themeIcon: "sun",
    },
    darkTheme: {
      text: "#fff",
      background: "#5c5c5c",
      themeIcon: "moon",
    },
  };

  handleOnChangeTheme = () =>
    this.setState({ isDarkTheme: !this.state.isDarkTheme });

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, handleChangeTheme: this.handleOnChangeTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

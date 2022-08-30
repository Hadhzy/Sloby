import React, { createContext, useState } from "react"
import useLocalStorage from "use-local-storage"

export const ThemeContext = createContext(true)

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useLocalStorage("theme", "theme" ? "dark" : "light")

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        switchTheme: switchTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}



// import React, {  createContext, Component } from "react"

// export const ThemeContext = createContext()

// class ThemeContextProvider extends Component {
//   state = {
//     isLightTheme: false,
//     light: {  syntax: "#555", ui: "#ddd", bg: "#eee" }, 
//     dark: {  syntax: "#ddd", ui: "#333", bg: "#555" },
//   } 

//   toggleTheme = () => {
//     this.setState({ isLightTheme: !this.state.isLightTheme})
//   }
//   render() { 
//     return (
//       <ThemeContext.Provider value={{ ...this.state} }>
//         {this.props.children}
//       </ThemeContext.Provider>
//     )
//   }
// }
 
// export default ThemeContextProvider;
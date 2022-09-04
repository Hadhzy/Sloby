import React, { createContext, useState } from "react"
import useLocalStorage from "use-local-storage"

/**
 * This context is gonna determine that which is the current theme in our project
 * @param {string} theme - This state is the currentTheme title. 
 * @function switchTheme - This is gonna switch the theme based on the current theme, and return the opposite one. 
*/



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
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

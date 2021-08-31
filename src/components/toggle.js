import React from "react"
import { HiMoon, HiSun } from "react-icons/hi"
import { ThemeContext } from "./themeContext"

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="p-3 rounded-full cursor-pointer hover:bg-gray-800 hover:bg-opacity-20">
      {theme === "dark" ? (
        <HiSun
          className="text-gray-500 dark:text-white text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          className="text-gray-500 dark:text-white text-2xl cursor-pointer"
        />
      )}
    </div>
  )
}

export default Toggle
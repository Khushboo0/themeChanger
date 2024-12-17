import React, { useEffect } from "react";

import "./App.css";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Update body class based on the theme
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [theme]); // Runs whenever 'theme' changes

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Changer with Context API</h1>
      <p>Current Theme: {theme === "light" ? "Light" : "Dark"}</p>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <footer>
        <p>&copy; 2024 Theme Switcher | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;

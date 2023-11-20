import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toogleDarkMode() {
    setIsDarkMode(prevIsDarkMode => !prevIsDarkMode)
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Header toogleDarkMode={toogleDarkMode} />
      <Home />
    </div>
  )
}

export default App

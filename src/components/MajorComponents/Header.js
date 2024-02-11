/** @format */
import Logo from "../MinorComponents/Logo";
import { useState, memo } from "react";
function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const styles = {
    // position: "fixed",
    // top: "0",
    // right: "0",
    // left: "0",
    backgroundColor: !darkMode
      ? "var(--default-light-color)"
      : "var(--default-dark-color)",
    color: darkMode ? "#fff" : "#000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  };
  return (
    <header className="theHeader" style={styles}>
      <Logo />
      <h2>THE COURSES!</h2>
      <label htmlFor="toggleDarkMode">
        Toggle Dark Mode
        <input
          type="checkbox"
          id="toggleDarkMode"
          chacked={darkMode}
          onChange={() => setDarkMode((pre) => !pre)}
        />
      </label>
    </header>
  );
}
export default memo(Header);

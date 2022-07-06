import React, { useState } from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";
import DropDown from "./DropDown";
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  return (
    <div
      className={toggleTheme ? "light" : "dark"}
      style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        menu {toggleMenu ? "🔺" : "🔻"}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setToggleTheme(!toggleTheme)}
      >
        Theme {toggleTheme ? <MdLightMode /> : <MdNightlight />}
      </div>
      {toggleMenu && <DropDown toggleTheme={toggleTheme} />}
    </div>
  );
}

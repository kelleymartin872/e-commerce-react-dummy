import React from "react";

export default function DropDown(props) {
  const style1 = {
    position: "absolute",
    top: "100%",
    textAlign: "center",
    opacity: "80%",
    width: "100%",
    padding: "20px",
  };
  return (
    <div className={!props.toggleTheme ? "dark" : "light"} style={style1}>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </div>
  );
}

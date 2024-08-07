import React from "react";
import * as css from "./buttons.css";

export function MainButton({ children }) {
  return <button className={css.root}>{children}</button>;
}

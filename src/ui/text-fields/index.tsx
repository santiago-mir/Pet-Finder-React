import React from "react";
import * as css from "./styles.css";

export function TextField({ type, name }) {
  return <input className={css.input} type={type} name={name} />;
}

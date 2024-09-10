import React from "react";
import { SmallText } from "../texts";
import * as css from "./styles.css";

export function TextField({ label, type, name }) {
  return (
    <label className={css.label}>
      <SmallText>{label}</SmallText>
      <input className={css.input} type={type} name={name} />
    </label>
  );
}

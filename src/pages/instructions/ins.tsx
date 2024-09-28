import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import * as css from "./ins.css";

function InstructionsPage(props) {
  return <div className={css.instructions}>soy la ins</div>;
}

export { InstructionsPage };

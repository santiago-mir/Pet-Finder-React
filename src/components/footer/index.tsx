import React, { useMemo } from "react";
import * as css from "./index.css";
import instagramLogo from "../../assets/instagram.png";
import linkedinLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github-sign.png";
import { SecondaryText } from "../../ui/texts";
import { Link } from "react-router-dom";

function MyFooter(props) {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <Link
          className={css.link}
          to={"https://www.instagram.com/santi_miranda1/"}
        >
          <img className={css.img} src={instagramLogo} alt="logo" />
        </Link>
        <Link
          className={css.link}
          to={"https://www.linkedin.com/in/santiago-miranda-a23304239/"}
        >
          <img className={css.img} src={linkedinLogo} alt="logo" />
        </Link>
        <Link className={css.link} to={"https://github.com/santiago-mir"}>
          <img className={css.img} src={githubLogo} alt="logo" />
        </Link>
      </div>
      <SecondaryText size="15px" color="white">
        Developed by Santiago Miranda
      </SecondaryText>
    </footer>
  );
}

export { MyFooter };

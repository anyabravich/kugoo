import React from "react";
import { IBannerDescription } from "./types";
import cn from "classnames";

import styles from "./styles.module.scss";

const BannerDescription = ({ children, color }: IBannerDescription) => {
  return (
    <p
      className={
        styles[cn("banner-description", { color: styles[color || ""] })]
      }
    >
      {children}
    </p>
  );
};

export default BannerDescription;

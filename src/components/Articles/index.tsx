import React from "react";
import { IArticles } from "./types";

import styles from "./styles.module.scss";

const Articles = ({ children }: IArticles) => {
  return <section className={styles["articles"]}>{children}</section>;
};

export default Articles;

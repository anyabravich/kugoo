import React from "react";
import { IContainer } from "./types";

import styles from "./styles.module.scss";

const Container = ({ children }: IContainer) => {
  return <div className={styles["container"]}>{children}</div>;
};

export default Container;

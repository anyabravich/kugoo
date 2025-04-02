import React from "react";
import styles from "./styles.module.scss";
import Container from "@/components/Container";
import Link from "next/link";
import { menu, socials } from "./data";
import Icons from "@/components/Icons";

const MenuTop = () => {
  return (
    <section className={styles["menu"]}>
      <Container>
        <div className={styles["menu-box"]}>
          <div className={styles["menu-left"]}>
            <ul className={styles["menu-list"]}>
              {menu.map(({ link, text }) => (
                <li className={styles["menu-item"]} key={link}>
                  <Link href={link}>{text}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles["menu-social"]}>
              {socials.map(({ link, icon }) => {
                const IconComponent = Icons[icon];

                return (
                  <li className={styles["menu-social-item"]} key={icon}>
                    <Link href={link}>
                      {IconComponent && <IconComponent />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={styles["menu-right"]}>
            <li className={styles["menu-right-item"]}>
              <a className={styles["menu-phone"]} href="tel:88005055461">
                +7 (800) 505-54-61
              </a>
            </li>
            <li className={styles["menu-right-item"]}>
              <button className={styles["menu-plus"]} type="button">
                <Icons.plus />
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default MenuTop;

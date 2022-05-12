import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <Navbar />
      </header>
      <div className={styles.container}>{children}</div>
      <footer></footer>
    </div>
  );
};

export default Layout;

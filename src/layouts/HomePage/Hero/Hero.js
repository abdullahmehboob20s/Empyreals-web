import React from "react";
import styles from "./Hero.module.css";
import banner from "assets/images/banner.png";
import logo1 from "assets/images/logo1.png";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <img src={banner} className="w-full" alt="" />
      <img src={logo1} className={styles.logo} alt="" />
    </div>
  );
}

export default Hero;

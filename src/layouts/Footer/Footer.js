import React from "react";
import styles from "./Footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo-2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-wrapper">
        <Link to="/" className={`${styles.logo} mb-25px`}>
          <img src={logo1} className="blend-mode-screen" alt="" />
          <img src={logo2} className="blend-mode-screen" alt="" />
        </Link>

        <p className="fs-24px weight-4 text-center white mb-30px">
          Terms & conditions
        </p>

        <div className={`${styles.socialLinks} mb-30px`}>
          <a href="/" target="_blank">
            <AiFillInstagram size={60} />
          </a>
          <a href="/" target="_blank">
            <FaDiscord size={60} />
          </a>
          <a href="/" target="_blank">
            <BsTwitter size={52} />
          </a>
        </div>

        <p className="fs-14px weight-4 text-center white">
          Copyright © 2021, All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

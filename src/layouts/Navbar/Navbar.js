import React from "react";
import styles from "./Navbar.module.css";
import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo-2.png";
import { Link } from "react-router-dom";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery ";
import { HiOutlineLink } from "react-icons/hi";

function Navbar() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow700px = useMediaQuery("(max-width : 700px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.Left}>
            <Link to="/" className={styles.logo}>
              <img src={logo1} className="blend-mode-screen" alt="" />
              <img src={logo2} className="blend-mode-screen" alt="" />
            </Link>
          </div>
          <div className={styles.Right}>
            <a href="/" target="_blank">
              <BsDiscord size={isBellow1000px ? 24 : 40} />
            </a>
            <a href="/" target="_blank">
              <BsTwitter size={isBellow1000px ? 24 : 41} />
            </a>
            <a href="/" target="_blank">
              <AiFillInstagram size={isBellow1000px ? 24 : 43} />
            </a>

            <button
              className={`${
                styles.connectBtn
              } yellow-btn white uppercase weight-7 ${
                isBellow1000px ? "fs-14px" : "fs-16px"
              } pointer`}
            >
              {isBellow700px ? <HiOutlineLink size={20} /> : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

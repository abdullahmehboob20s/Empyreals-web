import useMediaQuery from "hooks/useMediaQuery ";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./MintPage.module.css";

function MintPage() {
  const isBellow650px = useMediaQuery("(max-width : 650px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className={`${styles.wrapper}`}>
      <Navbar />
      <div className={`${styles.content} container-wrapper`}>
        <h1
          className={`${styles.title} ${
            isBellow500px ? "fs-22px" : "fs-30px"
          } weight-5 yellow uppercase mb-50px`}
        >
          Mint Bundles
        </h1>

        <div className={styles.grid}>
          <div></div>
          <div>
            {" "}
            <button
              className={`${styles.mintBtn} ${styles.silver} pointer ${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  black weight-4`}
            >
              Silver
            </button>
          </div>
          <div>
            {" "}
            <button
              className={`${styles.mintBtn} ${styles.gold} pointer ${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  black weight-4`}
            >
              Gold
            </button>
          </div>
          <div>
            {" "}
            <button
              className={`${styles.mintBtn} ${styles.platinum} pointer ${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  black weight-4`}
            >
              Platinum
            </button>
          </div>
          <div>
            {" "}
            <button
              className={`${styles.mintBtn} ${styles.daimond} pointer ${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  black weight-4`}
            >
              Daimond
            </button>
          </div>

          {/* 2ND ROW */}

          <div></div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              1 NFT
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              2 NFT
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              3 NFT
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              4 NFT
            </p>
          </div>

          {/* 3RD ROW */}
          <div>
            <button
              className={`${styles.mintBtn} ${styles.platinum} pointer ${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  black weight-4`}
            >
              Whitelist
            </button>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.05 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.09 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.13 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.22 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>

          {/* 4TH ROW */}
          <div>
            <button
              className={`${styles.mintBtn} ${styles.gold} pointer ${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  black weight-4`}
            >
              Public Sale
            </button>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.07 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.12 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.18 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
          <div>
            <p
              className={`${
                isBellow650px ? "fs-12px" : "fs-18px"
              } text-center  white weight-4`}
            >
              0.28 {isBellow500px ? <br /> : ""} ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintPage;

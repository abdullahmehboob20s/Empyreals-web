import React from "react";
import styles from "./Story.module.css";
import { BsDiscord } from "react-icons/bs";
import daimonds from "assets/images/daimonds.png";
import useMediaQuery from "hooks/useMediaQuery ";
import Title from "components/Title/Title";

function Story() {
  const isBellow760px = useMediaQuery("(max-width : 760px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className={styles.section}>
          <div className={styles.left}>
            <div className="mb-35px">
              <Title title="Origin Story" />
            </div>

            <p
              className={`${
                isBellow760px ? "fs-16px" : "fs-22px"
              } weight-4 white lh-1_5 mb-45px`}
            >
              {" "}
              Nestled deep in the Metaverse was the world <br /> <br /> of
              Empyros ‘The Highest Heaven’ — a high-tech planet whose advanced
              technological and scientific achievements were known far and wide
              in the Metaverse. A part of Empyros’ success as a society was its
              small population of 6,666 Empyreals which allowed them to maximize
              the resources allocated to each citizen. It was a harmonious and
              prosperous society that was self-sufficient and untouched by evil
              and immoral practices. Until one day something appeared above the
              Spire of Empyros - A Wormhole. <br />
              <br /> Join our discord to know more
            </p>

            <button className={`${styles.btn} yellow-btn pointer`}>
              <BsDiscord size={isBellow760px ? 24 : 34} />{" "}
              <span
                className={`${
                  isBellow760px ? "fs-16px" : "fs-22px"
                } black weight-7`}
              >
                Join Discord
              </span>
            </button>
          </div>
          <div className={styles.right}>
            <img src={daimonds} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;

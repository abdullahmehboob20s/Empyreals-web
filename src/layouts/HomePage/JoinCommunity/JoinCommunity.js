import React from "react";
import styles from "./JoinCommunity.module.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import joinBanner from "assets/images/joinBanner.png";

function JoinCommunity() {
  return (
    <div>
      <div className="container-wrapper ">
        <div className={styles.section}>
          <div className={styles.left}>
            <h1 className="fs-56px text-yellow-gradient weight-7 mb-35px">
              Join the community
            </h1>

            <p className="fs-32px white weight-5 lh-1_4 mb-40px">
              Join us to get the news as soon as possible and follow for our
              latest announcement. Join the{" "}
              <a href="#" className="text-yellow-gradient weight-7">
                #Empfam now.
              </a>
            </p>

            <div className={styles.socialLinks}>
              <a href="/" target="_blank">
                <AiFillInstagram size={80} />
              </a>
              <a href="/" target="_blank">
                <FaDiscord size={80} />
              </a>
              <a href="/" target="_blank">
                <BsTwitter size={72} />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <img src={joinBanner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;

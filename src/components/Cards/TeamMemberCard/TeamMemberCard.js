import React from "react";
import styles from "./TeamMemberCard.module.css";

function TeamMemberCard({ img, name, designation, links }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <h1 className="fs-30px  weight-5">{name}</h1>
      <h2 className="fs-22px weight-4 ">{designation}</h2>

      <div className={styles.socialLinks}>
        {links &&
          links.map((data, index) => <a href={data.link}>{data.icon}</a>)}
      </div>
    </div>
  );
}

export default TeamMemberCard;

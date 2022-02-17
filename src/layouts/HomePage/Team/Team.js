import TeamMemberCard from "components/Cards/TeamMemberCard/TeamMemberCard";
import React from "react";
import styles from "./Team.module.css";

import teamMember1 from "assets/images/teamMember1.png";
import teamMember2 from "assets/images/teamMember2.png";
import teamMember3 from "assets/images/teamMember3.png";
import teamMember4 from "assets/images/teamMember4.png";
import teamMember5 from "assets/images/teamMember5.png";
import teamMember6 from "assets/images/teamMember6.png";
import teamMember7 from "assets/images/teamMember7.png";
import teamMember8 from "assets/images/teamMember8.png";
import { BsTwitter } from "react-icons/bs";

function Team() {
  return (
    <div>
      <div className="container-wrapper">
        <h1 className="text-yellow-gradient text-center fs-56px weight-7 mb-45px">
          Our Team
        </h1>

        <div className={styles.cards}>
          <TeamMemberCard
            img={teamMember1}
            name="Zavix"
            designation="Founder"
            links={[{ icon: <BsTwitter size={30} />, link: "/" }]}
          />
          <TeamMemberCard
            img={teamMember2}
            name="Alyra"
            designation="Founder"
            links={[{ icon: <BsTwitter size={30} />, link: "/" }]}
          />
          <TeamMemberCard
            img={teamMember3}
            name="Rely"
            designation="Community Manager"
          />
          <TeamMemberCard img={teamMember4} name="RYU" designation="SMM" />
          <TeamMemberCard
            img={teamMember5}
            name="Sped"
            designation="Discord Moderator"
          />
          <TeamMemberCard
            img={teamMember6}
            name="Kenko"
            designation="Discord Moderator"
          />
          <TeamMemberCard img={teamMember7} name="Scala" designation="Dev" />
          <TeamMemberCard img={teamMember8} name="Kyfat" designation="Artist" />
        </div>
      </div>
    </div>
  );
}

export default Team;

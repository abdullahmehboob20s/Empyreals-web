import React, { useEffect, useState } from "react";
import styles from "./RoadmapCard.module.css";

function RoadmapCard({ title, points, percentage }) {
  const progressBar = React.useRef();
  const valueContainer = React.useRef();
  let [progressValue, setProgressValue] = useState(0);
  let [progressEndValue, setProgressEndValue] = useState(percentage);
  let [speed, setSpeed] = useState(30);

  useEffect(() => {
    if (percentage) {
      let progress = setInterval(() => {
        setProgressValue(progressValue++);
        valueContainer.current.textContent = `${progressValue}%`;
        progressBar.current.style.background = `conic-gradient(
        #c69649 ${progressValue * 3.6}deg,
        transparent ${progressValue * 3.6}deg
        )`;
        if (progressValue === progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
    }
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.circular_progress}>
          <div className={styles.progresssss} ref={progressBar}></div>
          <div
            className={`${styles.value_container} fs-32px weight-5 white`}
            ref={valueContainer}
          >
            0%
          </div>
        </div>

        <div className={styles.lineWrapper}>
          <div className={styles.lineCircle}></div>
          <div className={styles.line}></div>
          <div className={styles.lineCircle}></div>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className="fs-36px white weight-5 mb-15px">{title}</h1>
        <ul style={{ paddingLeft: "1.6rem" }}>
          {points.map((data, index) => (
            <li className="fs-16px weight-4 white mb-5px lh-1_4" key={index}>
              {data.point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RoadmapCard;

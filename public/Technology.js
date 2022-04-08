import styles from "../styles/Technology.module.scss";

import Image from "next/image";

function Technology() {
  return (
    <div className={styles.main}>
      <div className={styles.null}></div>
      <div className={styles.container} id="technology">
        <div className={styles.content}>
          <div className={styles.textbox}>
            <div className={styles.details}>
              <div className={styles.logos}>
                <Image src="/mini.png" width="60" height="60" alt="bitcoin" />
              </div>
              <div className={styles.textanim2}>
                <h1>
                  1000 TPS <br /> 0.006 TWh
                </h1>
              </div>
            </div>

            <div className={styles.texts}>
              <h1 className={styles.titles}>Technology</h1>
              <p className={styles.text}>
                With a capacity of 1,000 TPS (transactions per second), Hard
                Blue far exceeds 7 TPS of Bitcoin. The Cardano network where
                Hard Blue runs consumes only 0.006 TWh (terawatt-hours) annually
                while Bitcoin consumes 121.36 TWh.
                <br /> <br /> Bitcoin has not had any relevant improvements for
                years, which makes Bitcoin an outdated solution compared to Hard
                Blue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;

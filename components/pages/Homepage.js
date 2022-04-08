import styles from "../styles/Homepage.module.scss";
// import Image from "next/image";

function Token() {
  return (
    <div className={styles.container} id="token">
      <div className={styles.textbox}>
        <div className={styles.center}>
          <h1 className="title">Working on it</h1>
          <p className="text">
		We are working on the site, we will be back soon.
          </p>
          <div className={styles.buttondiv}>
            <button
              data-aos="zoom-in-up"
              data-aos-duration="500"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="500"
              className={styles.button}
              onClick={() => fullpage_api.moveTo(2)}
            >
              Discover more 
            </button>
          </div>
        </div>
      </div>	
    </div>
  );
}

export default Token;
